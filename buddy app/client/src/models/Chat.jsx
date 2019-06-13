import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Chat {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setShowId = value => (this.showId = value);
  setUrl = value => (this.url = value);
  setName = value => (this.name = value);

  setValues = values => {
    this.setId(values._id);
    this.setShowId(values.show_id);
    this.setUrl(values.url);
    this.setName(values.name);
  };

  get values() {
    return {
      showId: this.showId,
      url: this.url,
      name: this.name
    };
  }

  get show() {
    return this.store.showStore.resolveShow(this.showId);
  }

  get messages() {
    return this.store.messageStore.resolveMessages(this.id);
  }

  get connection() {
    return this.store.connectionStore.getByShowId(this.showId);
  }
}

decorate(Chat, {
  id: observable,
  showId: observable,
  url: observable,
  name: observable,
  setId: action,
  setShowId: action,
  setUrl: action,
  setName: action,
  values: computed,
  show: computed,
  messages: computed,
  connection: computed
});

export default Chat;
