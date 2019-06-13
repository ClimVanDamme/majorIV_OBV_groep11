import {
  decorate,
  observable,
  configure,
  runInAction,
  action,
  observe
} from "mobx";
import Connection from "../models/Connection";
import Api from "../api";

configure({ enforceActions: `observed` });
class ConnectionStore {
  connections = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`connections`);
    if (this.rootStore.uiStore.authUser) {
      this.getAll();
    }
    observe(this.rootStore.uiStore, `authUser`, change => {
      if (change.newValue) {
        this.getAll();
      } else {
        runInAction(() => (this.connections = []));
      }
    });
  }

  //SHOWS

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addConnection));
  };

  addConnection = values => {
    const newConnection = new Connection(this.rootStore);
    newConnection.setValues(values);
    this.connections.push(newConnection);
    this.api
      .create(newConnection)
      .then(connectionValues => newConnection.setValues(connectionValues));
  };

  _addConnection = values => {
    const connection = new Connection(this.rootStore);
    connection.setValues(values);
    const duplicateConn = this.connections.find(conn => conn.id === values._id);
    if (!duplicateConn) {
      runInAction(() => this.connections.push(connection));
    }
  };

  updateConnection = connection => {
    this.api.update(connection).then(values => connection.setValues(values));
  };

  getById = id => {
    return this.connections.find(check => check.id === id);
  };

  // getByShowId = showId => {
  //   return this.connections.find(check => check.showId === showId);
  // };

  getByShowId = id => {
    const connection = this.connections.find(
      connection => connection.showId === id
    );
    // if (!connection) {
    //   this.api.getByShowId(id).then(this._addconnection);
    // }
    return connection;
  };

  getByCharId = charId => {
    return this.connections.find(check => check.characterId === charId);
  };
}

decorate(ConnectionStore, {
  connections: observable,
  addConnection: action
});

export default ConnectionStore;
