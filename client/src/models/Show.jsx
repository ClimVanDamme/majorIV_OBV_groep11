import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Show {
  constructor(title, description, date, category, length, id = uuid.v4()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.category = category;
    this.length = length;
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

  // get values() {
  //   return { name: this.name, price: this.price };
  // }
}

decorate(Show, {
  id: observable,
  title: observable,
  description: observable,
  image: observable,
  tag: observable,
  setId: action,
  setTitle: action,
  setDescription: action,
  setImage: action,
  setTag: action
});

export default Show;
