import { decorate, observable, configure, runInAction, observe } from "mobx";
import Message from "../models/Message";
import Api from "../api";

configure({ enforceActions: `observed` });
class MessageStore {
  messages = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`messages`);
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
    this.api.getAll().then(d => d.forEach(this._addMessage));
  };

  getById = id => {
    return this.messages.find(check => check.id === id);
  };

  _addMessage = values => {
    const message = new Message(this.rootStore);
    message.setValues(values);
    runInAction(() => this.messages.push(message));
  };

  resolveMessages = chatId =>
    this.messages.filter(message => message.chatId === chatId);
}

decorate(MessageStore, {
  messages: observable
});

export default MessageStore;
