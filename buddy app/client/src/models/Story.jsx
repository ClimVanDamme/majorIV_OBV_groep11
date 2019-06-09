import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Story {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setCharacterId = value => (this.characterId = value);
  setShowId = value => (this.showId = value);
  setText = value => (this.text = value);

  setValues = values => {
    this.setId(values._id);
    this.setCharacterId(values.character_id);
    this.setShowId(values.show_id);
    this.setText(values.text);
  };

  get values() {
    return {
      characterId: this.characterId,
      showId: this.showId,
      text: this.text
    };
  }
}

decorate(Story, {
  id: observable,
  characterId: observable,
  showId: observable,
  text: observable,
  setId: action,
  setCharacterId: action,
  setShowId: action,
  setText: action,
  values: computed
});

export default Story;
