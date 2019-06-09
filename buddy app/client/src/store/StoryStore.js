import {
  decorate,
  observable,
  configure,
  runInAction,
  action,
  observe
} from "mobx";
import Story from "../models/Story";
import Api from "../api";

configure({ enforceActions: `observed` });
class StoryStore {
  stories = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`stories`);
    if (this.rootStore.uiStore.authUser) {
      this.getAll();
    }
    observe(this.rootStore.uiStore, `authUser`, change => {
      if (change.newValue) {
        this.getAll();
      } else {
        runInAction(() => (this.stories = []));
      }
    });
  }

  // constructor(rootStore) {
  //   this.rootStore = rootStore;
  //   this.api = new Api(`stories`);
  //   this.getAll();
  // }

  //SHOWS

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addStory));
  };

  addStory = values => {
    const newStory = new Story(this.rootStore);
    newStory.setValues(values);
    this.stories.push(newStory);
    this.api.create(newStory).then(values => newStory.setValues(values));
  };

  _addStory = values => {
    const story = new Story(this.rootStore);
    story.setValues(values);
    runInAction(() => this.stories.push(story));
  };

  getById = id => {
    return this.stories.find(check => check.id === id);
  };
}

decorate(StoryStore, {
  stories: observable,
  addStory: action
});

export default StoryStore;
