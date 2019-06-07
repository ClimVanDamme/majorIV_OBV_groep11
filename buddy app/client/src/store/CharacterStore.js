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
    //wanneer dit loopt, genereert de app heel veel voorstellingen
    //moeten wel eerst pullen van de server zodat we rechtstreeks een link met id in de zoekbalk kunnen plakken
    // this.getAll();

    return this.characters.find(check => check.id === id);
  };

  _getAll = async () => {
    // const jsonData = await this.api.getAll();
    //wanneer deze code loopt, genereert de app heel veel voorstellingen
    // runInAction(
    //   () =>
    //     (this.shows = this.shows.concat(
    //       jsonData.map(values => {
    //         const show = new Show();
    //         show.setValues(values);
    //         return show;
    //       })
    //     ))
    // );
  };

  getRandomCharacter = characters => {
    console.log(characters, `characters van bepaalde show`);
    const character = characters[Math.floor(Math.random() * characters.length)];
    console.log(character, `random character`);
    // this.randomCharacter = character;
    return character;
  };

  _addCharacter = values => {
    // console.log(values);
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
