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

  findById = id => {
    const show = this._shows.find(show => show.id === id);
    if (!show) {
      this.api.getById(id).then(this._addShow);
    }
    return show;
  };

  _addShow = values => {
    const show = new Show(this.rootStore);
    show.setValues(values);
    runInAction(() => this._shows.push(show));
  };

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
