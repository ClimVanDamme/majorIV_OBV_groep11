import React from "react";
import { PropTypes } from "prop-types";

const CharacterQuote = ({ character }) => {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.quote}</p>
    </div>
  );
};

CharacterQuote.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterQuote;
