import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Show {
  constructor(title, description, image, tag, id = uuid.v4()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tag = tag;
  }

  setId = value => (this.id = value);
  setTitle = value => (this.title = value);
  setDescription = value => (this.description = value);
  setImage = value => (this.image = value);
  setTag = value => (this.tag = value);

  setValues = values => {
    this.setId(values._id);
    this.setTitle(values.title);
    this.setDescription(values.description);
    this.setImage(values.image);
    this.setTag(values.tag);
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
