import {
  decorate,
  observable,
  configure,
  runInAction,
  computed,
  action
} from "mobx";
import Show from "../models/Show";
import Api from "../api";

configure({ enforceActions: `observed` });
class ShowStore {
  _shows = [];
  _filter = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`shows`);
    this.getAll();
  }

  //SHOWS

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

  findById = id => {
    console.log(id, `id in findById`);
    console.log(this._shows);
    console.log(`findById`);
    const show = this._shows.find(show => show.id === id);
    if (!show) {
      console.log(`no show`);
      this.api.getById(id).then(this._addShow);
    }
    return show;
  };

  _addShow = values => {
    console.log(values, `values in _addShow`);
    const show = new Show(this.rootStore);
    show.setValues(values);
    runInAction(() => this._shows.push(show));
    console.log(this.categories);
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

  resolveShow = showId => this._shows.find(show => show.id === showId);

  get categories() {
    const categories = [];
    this._shows.forEach(show => {
      if (!categories.includes(show.category)) {
        categories.push(show.category);
      }
    });

    return categories;
  }

  setFilter = filter => {
    this._filter = filter;
  };

  get shows() {
    // console.log(this._shows);
    return this._filter
      ? this._shows.filter(check => check.category === this._filter)
      : this._shows;
  }
}

decorate(ShowStore, {
  _shows: observable,
  _filter: observable,
  categories: computed,
  setFilter: action,
  shows: computed
});

export default ShowStore;
