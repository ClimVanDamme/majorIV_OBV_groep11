import React from "react";
import { PropTypes } from "prop-types";

// import { observer } from "mobx-react";

const CharacterDetails = ({ character }) => {
  console.log(character, `character in CharacterDetails component`);

  return (
    <div>
      <h1>{character.name}</h1>
      <section>
        <ul>
          {character.traits.map(trait => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterDetails;
