import { decorate, observable, configure, runInAction, action } from "mobx";
import Chat from "../models/Chat";
import Api from "../api";

configure({ enforceActions: `observed` });
class ChatStore {
  chats = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`chats`);
    this.getAll();
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
}

decorate(ChatStore, {
  chats: observable,
  addChat: action
});

export default ChatStore;
