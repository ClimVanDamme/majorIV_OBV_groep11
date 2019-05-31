import ShowStore from "./ShowStore";
import UiStore from "./UiStore";

class Store {
  constructor() {
    this.uiStore = new UiStore(this);
    this.showStore = new ShowStore(this);
  }
}

export default new Store();
