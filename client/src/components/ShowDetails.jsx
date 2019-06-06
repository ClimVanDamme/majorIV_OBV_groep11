import React from "react";
import { PropTypes } from "prop-types";
import CharacterQuote from "./CharacterQuote";
// import { observer } from "mobx-react";

const ShowDetails = ({ show }) => {
  console.log(show, `show in ShowDetails component`);
  return (
    <div>
      <p>{show.title}</p>
      <p>{show.description}</p>
      <button>Geef mij een personage</button>
      {show.characters.map(character => (
        <CharacterQuote key={character.name} character={character} />
      ))}
    </div>
  );
};

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowDetails;
