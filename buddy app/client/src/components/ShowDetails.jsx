import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import CharacterQuote from "./CharacterQuote";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { values } from "mobx";
import { ROUTES } from "../constants";

// import { observer } from "mobx-react";

const ShowDetails = ({
  show,
  getRandomCharacter,
  addConnection,
  getConnection,
  history
}) => {
  const [ownCharacter, setOwnCharacter] = useState({});
  const connection = getConnection(show.id);

  useEffect(() => {
    const character = ownCharacter;

    if (character.id) {
      values.character_id = character.id;
      // addConnection(values);
      addConnection({
        show_id: show.id,
        character_id: character.id,
        characterSet: true
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

  if (connection && connection.characterSet === true) {
    return (
      <div>
        <p>{show.title}</p>
        <p>{show.description}</p>
        <Link to={ROUTES.chat}>Chatten als mijn personage</Link>
        {show.characters.map(character => (
          <CharacterQuote key={character.name} character={character} />
        ))}
        <p>{connection.character.name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>{show.title}</p>
        <p>{show.description}</p>
        <button
          onClick={() => {
            setOwnCharacter(getRandomCharacter(show.characters));
          }}
        >
          Geef mij een personage
        </button>
        {show.characters.map(character => (
          <CharacterQuote key={character.name} character={character} />
        ))}
      </div>
    );
  }
};

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired
};

export default withRouter(ShowDetails);
