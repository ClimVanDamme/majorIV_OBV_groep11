import uuid from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Character {
  constructor(
    name,
    traits,
    personality,
    story,
    summary,
    quote,
    showId,
    id = uuid.v4()
  ) {
    this.id = id;
    this.name = name;
    this.traits = traits;
    this.personality = personality;
    this.story = story;
    this.summary = summary;
    this.quote = quote;
    this.showId = showId;
  }

  setId = value => (this.id = value);
  setName = value => (this.name = value);
  setTraits = value => (this.traits = value);
  setPersonality = value => (this.personality = value);
  setStory = value => (this.story = value);
  setSummary = value => (this.summary = value);
  setQuote = value => (this.quote = value);
  setShowId = value => (this.showId = value);

  setValues = values => {
    this.setId(values._id);
    this.setName(values.name);
    this.setTraits(values.traits);
    this.setPersonality(values.personality);
    this.setStory(values.story);
    this.setSummary(values.summary);
    this.setQuote(values.quote);
    //show_id want staat zo op de server
    this.setShowId(values.show_id);
  };

  get values() {
    return {
      name: this.name,
      traits: this.traits,
      personality: this.personality,
      story: this.story,
      summary: this.summary,
      quote: this.quote,
      showId: this.showId
    };
  }
}

decorate(Character, {
  id: observable,
  name: observable,
  traits: observable,
  personality: observable,
  story: observable,
  summary: observable,
  quote: observable,
  showId: observable,
  setId: action,
  setName: action,
  setTraits: action,
  setPersonality: action,
  setStory: action,
  setSummary: action,
  setQuote: action,
  setShowId: action,
  values: computed
});

export default Character;
