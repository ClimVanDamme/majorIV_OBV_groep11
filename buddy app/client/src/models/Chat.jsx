import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Chat {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setShowId = value => (this.showId = value);

  setValues = values => {
    this.setId(values._id);
    this.setShowId(values.show_id);
  };

  get values() {
    return {
      showId: this.showId
    };
  }

  get show() {
    return this.store.showStore.resolveShow(this.showId);
  }

  get messages() {
    return this.store.messageStore.resolveMessages(this.id);
  }
}

decorate(Chat, {
  id: observable,
  showId: observable,
  setId: action,
  setShowId: action,
  values: computed,
  show: computed,
  messages: computed
});

export default Chat;
