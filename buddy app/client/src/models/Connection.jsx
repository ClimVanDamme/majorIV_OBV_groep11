import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Connection {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setUserId = value => (this.userId = value);
  setCharacterId = value => (this.characterId = value);
  // setChatId = value => (this.chatId = value);
  setShowId = value => (this.showId = value);

  setValues = values => {
    console.log(values._id, `_id in setValues`);
    console.log(values.user_id, `user_id in setValues`);
    console.log(values.character_id, `character_id in setValues`);
    console.log(values.show_id, `show_id in setValues`);

    this.setId(values._id);
    this.setUserId(values.user_id);
    this.setCharacterId(values.character_id);
    // this.setChatId(values.chat_id);
    this.setShowId(values.show_id);
  };

  get character() {
    return this.store.characterStore.resolveCharacter(this.characterId);
  }

  get values() {
    return {
      userId: this.userId,
      characterId: this.characterId,
      // chatId: this.chatId,
      showId: this.showId,
      character: computed
    };
  }
}

decorate(Connection, {
  id: observable,
  userId: observable,
  characterId: observable,
  // chatId: observable,
  showId: observable,
  setId: action,
  setUserId: action,
  setCharacterId: action,
  // setChatId: action,
  setShowId: action,
  values: computed
});

export default Connection;
