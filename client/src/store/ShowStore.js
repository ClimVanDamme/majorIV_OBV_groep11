import { decorate, observable, configure, runInAction } from "mobx";
import Show from "../models/Show";
import Api from "../api";

configure({ enforceActions: `observed` });
class ShowStore {
  shows = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`shows`);
    this.characterApi = new Api(`characters`);
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

  getById = id => {
    //wanneer dit loopt, genereert de app heel veel voorstellingen
    //moeten wel eerst pullen van de server zodat we rechtstreeks een link met id in de zoekbalk kunnen plakken
    // this.getAll();

    return this.shows.find(check => check.id === id);
  };

  _getAll = async () => {
    const jsonData = await this.api.getAll();

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
