import React from "react";
import { PropTypes } from "prop-types";
import { inject, observer } from "mobx-react";
import Story from "./Story";

// import { observer } from "mobx-react";

const CharacterDetails = ({ character, storyStore, connectionStore }) => {
  const { addStory } = storyStore;
  console.log(character, `dit is het personage`);
  const connection = connectionStore.getByCharId(character.id);
  return (
    <div>
      <h1>{character.name}</h1>
      <section>
        <ul>
          {character.traits.map(trait => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
        <Story addStory={addStory} connection={connection} />
      </section>
    </div>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};

export default inject(`storyStore`, `connectionStore`)(
  observer(CharacterDetails)
);
