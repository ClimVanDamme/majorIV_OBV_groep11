import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";
import CharacterQuote from "./CharacterQuote";
import { withRouter } from "react-router-dom";
import { values } from "mobx";

// import { observer } from "mobx-react";

const ShowDetails = ({
  show,
  getRandomCharacter,
  randomCharacter,
  addConnection,
  userId,
  history
}) => {
  console.log(show, `show in ShowDetails component`);
  const [ownCharacter, setOwnCharacter] = useState({});
  // const values = {};
  // values.user_id = userId;
  // values.show_id = show.id;

  useEffect(() => {
    const character = ownCharacter;

    if (character.id) {
      values.character_id = character.id;
      // addConnection(values);
      addConnection({
        user_id: userId,
        show_id: show.id,
        character_id: character.id
      });
      history.push(`/characters/${character.id}`);
    }
  }, [ownCharacter]);
  // const handleOnClick = () => {
  //   getRandomCharacter(show.characters);
  //   if (randomCharacter) {
  //     history.push(`/characters/${randomCharacter.id}`);
  //   }
  // };

  return (
    <div>
      <p>{show.title}</p>
      <p>{show.description}</p>
      <button
        onClick={() => setOwnCharacter(getRandomCharacter(show.characters))}
      >
        Geef mij een personage
      </button>
      {show.characters.map(character => (
        <CharacterQuote key={character.name} character={character} />
      ))}
      <p>{ownCharacter.name}</p>
    </div>
  );
};

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired
};

export default withRouter(ShowDetails);
