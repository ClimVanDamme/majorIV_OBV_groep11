import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Show {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setTitle = value => (this.title = value);
  setDescription = value => (this.description = value);
  setDate = value => (this.date = value);
  setCategory = value => (this.category = value);
  setLength = value => (this.length = value);

  setValues = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setDescription(values.description);
    this.setDate(values.date);
    this.setCategory(values.category);
    this.setLength(values.length);
  };

  get characters() {
    return this.store.characterStore.resolveCharacters(this.id);
  }

  get values() {
    return {
      title: this.title,
      description: this.description,
      date: this.date,
      category: this.category,
      length: this.length
    };
  }
}

decorate(Show, {
  id: observable,
  title: observable,
  description: observable,
  date: observable,
  category: observable,
  length: observable,
  setId: action,
  setTitle: action,
  setDescription: action,
  setDate: action,
  setCategory: action,
  setLength: action,
  values: computed,
  characters: computed
});

export default Show;
