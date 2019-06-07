import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Message {
  constructor(store, id = uuid.v4()) {
    this.id = id;
    this.store = store;
  }

  setId = value => (this.id = value);
  setChatId = value => (this.chatId = value);
  setUserId = value => (this.userId = value);
  setText = value => (this.text = value);

  setValues = values => {
    this.setId(values._id);
    this.setChatId(values.chat_id);
    this.setUserId(values.user_id);
    this.setText(values.text);
  };

  get values() {
    return {
      chatId: this.showId,
      userId: this.userId,
      text: this.text
    };
  }
}

decorate(Message, {
  id: observable,
  chatId: observable,
  userId: observable,
  text: observable,
  setId: action,
  setChatId: action,
  setUserId: action,
  setText: action,
  values: computed
});

export default Message;
