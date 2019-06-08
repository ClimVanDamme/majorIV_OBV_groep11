import { decorate, observable, configure, runInAction, action } from "mobx";
import Character from "../models/Character";
import Api from "../api";

configure({ enforceActions: `observed` });
class CharacterStore {
  characters = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`characters`);
    this.getAll();
  }

  //SHOWS

  getAll = () => {
    this.api.getAll().then(d => d.forEach(this._addCharacter));
  };

  // addDrink = data => {
  //   const newDrink = new Drink();
  //   newDrink.updateFromServer(data);
  //   this.drinks.push(newDrink);
  //   this.api
  //     .create(newDrink)
  //     .then(drinkValues => newDrink.updateFromServer(drinkValues));
  // };

  getById = id => {
    return this.characters.find(check => check.id === id);
  };

  getRandomCharacter = characters => {
    const character = characters[Math.floor(Math.random() * characters.length)];
    return character;
  };

  _addCharacter = values => {
    const character = new Character();
    character.setValues(values);
    runInAction(() => this.characters.push(character));
  };

  resolveCharacters = showId =>
    this.characters.filter(character => character.showId === showId);

  resolveCharacter = characterId =>
    this.characters.find(char => char.id === characterId);
}

decorate(CharacterStore, {
  characters: observable,
  getRandomCharacter: action
});

export default CharacterStore;
