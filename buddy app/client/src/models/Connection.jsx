import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Connection {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  // setUserId = value => (this.userId = value);
  setCharacterId = value => (this.characterId = value);
  // setChatId = value => (this.chatId = value);
  setShowId = value => (this.showId = value);
  setCharactersSet = value => (this.characterSet = value);

  setValues = values => {
    this.setId(values._id);
    // this.setUserId(values.user_id);
    this.setCharacterId(values.character_id);
    // this.setChatId(values.chat_id);
    this.setShowId(values.show_id);
    this.setCharactersSet(values.characterSet);
  };

  get character() {
    return this.store.characterStore.resolveCharacter(this.characterId);
  }

  get show() {
    return this.store.showStore.resolveShow(this.showId);
  }

  get values() {
    return {
      // userId: this.userId,
      characterId: this.characterId,
      // chatId: this.chatId,
      showId: this.showId,
      characterSet: this.characterSet
    };
  }
}

decorate(Connection, {
  id: observable,
  // userId: observable,
  characterId: observable,
  // chatId: observable,
  showId: observable,
  characterSet: observable,
  setId: action,
  // setUserId: action,
  setCharacterId: action,
  // setChatId: action,
  setShowId: action,
  values: computed,
  character: computed
});

export default Connection;
