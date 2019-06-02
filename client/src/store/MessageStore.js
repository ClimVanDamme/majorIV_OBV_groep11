import { decorate, observable, configure, runInAction } from "mobx";
import Message from "../models/Message";
import Api from "../api";

configure({ enforceActions: `observed` });
class MessageStore {
  messages = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`messages`);
    this.getAll();
  }

  //SHOWS

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addMessage));
  };

  // addDrink = data => {
  //   const newDrink = new Drink();
  //   newDrink.updateFromServer(data);
  //   this.drinks.push(newDrink);
  //   this.api
  //     .create(newDrink)
  //     .then(drinkValues => newDrink.updateFromServer(drinkValues));
  // };

  getById = id => {
    //wanneer dit loopt, genereert de app heel veel voorstellingen
    //moeten wel eerst pullen van de server zodat we rechtstreeks een link met id in de zoekbalk kunnen plakken
    // this.getAll();

    return this.messages.find(check => check.id === id);
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

  _addMessage = values => {
    // console.log(values);
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
