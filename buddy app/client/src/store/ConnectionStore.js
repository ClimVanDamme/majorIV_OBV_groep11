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

  getById = id => {
    //wanneer dit loopt, genereert de app heel veel voorstellingen
    //moeten wel eerst pullen van de server zodat we rechtstreeks een link met id in de zoekbalk kunnen plakken
    // this.getAll();

    return this.connections.find(check => check.id === id);
  };

  _getAll = async () => {
    // const jsonData = await this.api.getAll();
    //wanneer deze code loopt, genereert de app heel veel voorstellingen
    // runInAction(
    //   () =>
    //     (this.shows = this.shows.concat(
    //       jsonData.map(values => {
    //         const show = new Show();
    //         show.setValues(values);
    //         return show;
    //       })
    //     ))
    // );
  };

  addConnection = values => {
    // console.log(`values`);

    // console.log(values);

    const newConnection = new Connection(this.rootStore);
    // console.log(newConnection, `connection voor het om zeep is`);
    newConnection.setValues(values);
    console.log(newConnection, `values aan newConnection gegeven`);
    this.connections.push(newConnection);
    this.api
      .create(newConnection)
      .then(connectionValues => newConnection.setValues(connectionValues));
  };

  _addConnection = values => {
    const connection = new Connection(this.rootStore);
    connection.setValues(values);
    runInAction(() => this.connections.push(connection));
  };
}

decorate(ConnectionStore, {
  connections: observable,
  addConnection: action
});

export default ConnectionStore;
