import {
  decorate,
  observable,
  configure,
  runInAction,
  action,
  observe,
  computed
} from "mobx";
import Chat from "../models/Chat";
import Api from "../api";

configure({ enforceActions: `observed` });
class ChatStore {
  _chats = [];
  _filter = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`chats`);
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
    this.api.getAll().then(d => d.forEach(this._addChat));
  };

  getById = id => {
    return this.chats.find(check => check.id === id);
  };

  _addChat = values => {
    const chat = new Chat(this.rootStore);
    chat.setValues(values);
    runInAction(() => this.chats.push(chat));
  };

  setFilter = filter => {
    console.log(this._filter);

    this._filter = filter;
  };

  nameFilter = value => {
    return value.character.name === this._filter;
  };

  get chats() {
    return this._filter ? this._chats.filter(this.nameFilter) : this._chats;
  }
}

decorate(ChatStore, {
  _chats: observable,
  _filter: observable,
  addChat: action,
  setFilter: action,
  chats: computed
});

export default ChatStore;
