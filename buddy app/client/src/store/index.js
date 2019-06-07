import ShowStore from "./ShowStore";
import CharacterStore from "./CharacterStore";
import ChatStore from "./ChatStore";
import MessageStore from "./MessageStore";
import ConnectionStore from "./ConnectionStore";
import UiStore from "./UiStore";

class Store {
  constructor() {
    this.uiStore = new UiStore(this);
    this.showStore = new ShowStore(this);
    this.characterStore = new CharacterStore(this);
    this.chatStore = new ChatStore(this);
    this.messageStore = new MessageStore(this);
    this.connectionStore = new ConnectionStore(this);
  }
}

export default new Store();
