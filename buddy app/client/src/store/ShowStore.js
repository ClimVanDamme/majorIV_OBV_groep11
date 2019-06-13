import {
  decorate,
  observable,
  configure,
  runInAction,
  computed,
  action,
  observe
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
    const duplicateShow = this._shows.find(show => show.id === values._id);
    if (!duplicateShow) {
      runInAction(() => this._shows.push(show));
    }
  };

  resolveShow = showId => this._shows.find(show => show.id === showId);

  get categories() {
    const categories = [`Alles`];
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

  categoryFilter = value => {
    if (this._filter === `Alles`) {
      return this._shows;
    }
    return value.category === this._filter;
  };

  get shows() {
    return this._filter ? this._shows.filter(this.categoryFilter) : this._shows;
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
