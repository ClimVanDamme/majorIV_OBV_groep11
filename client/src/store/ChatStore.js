import { decorate, observable, configure, runInAction } from "mobx";
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

    return this.chats.find(check => check.id === id);
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

  _addChat = values => {
    // console.log(values);
    const chat = new Chat(this.rootStore);
    chat.setValues(values);
    runInAction(() => this.chats.push(chat));
  };
}

decorate(ChatStore, {
  chats: observable
});

export default ChatStore;
