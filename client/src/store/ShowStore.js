import { decorate, observable, configure, runInAction } from "mobx";
import Show from "../models/Show";
import Api from "../api";

configure({ enforceActions: `observed` });
class ShowStore {
  shows = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`shows`);
    this.getAll();
  }

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addShow));
  };

  // addDrink = data => {
  //   const newDrink = new Drink();
  //   newDrink.updateFromServer(data);
  //   this.drinks.push(newDrink);
  //   this.api
  //     .create(newDrink)
  //     .then(drinkValues => newDrink.updateFromServer(drinkValues));
  // };

  _addShow = values => {
    console.log(values);
    const show = new Show();
    show.setValues(values);
    runInAction(() => this.shows.push(show));
  };

  // updateDrink = drink => {
  //   this.api
  //     .update(drink)
  //     .then(drinkValues => drink.updateFromServer(drinkValues));
  // };

  // deleteDrink = drink => {
  //   this.drinks.remove(drink);
  //   this.api.delete(drink);
  // };
}

decorate(ShowStore, {
  shows: observable
});

export default ShowStore;
