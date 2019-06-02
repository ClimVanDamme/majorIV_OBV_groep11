import React from "react";
import { PropTypes } from "prop-types";
import CharacterQuote from "./CharacterQuote";

const ShowDetails = ({ show }) => {
  return (
    <div>
      <p>{show.title}</p>
      <p>{show.description}</p>
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
