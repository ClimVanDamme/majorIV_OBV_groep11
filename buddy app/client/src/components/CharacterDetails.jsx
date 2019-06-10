import React from "react";
import { PropTypes } from "prop-types";
import { inject, observer } from "mobx-react";
import Story from "./Story";

// import { observer } from "mobx-react";

const CharacterDetails = ({
  character,
  storyStore,
  connectionStore,
  characterStore,
  showStore
}) => {
  const { addStory } = storyStore;
  const connection = connectionStore.getByCharId(character.id);
  const { getRandomCharacter } = characterStore;
  const { updateConnection } = connectionStore;

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

      <section>
        <h2>Chatten met je personage?</h2>
        <button
          onClick={() => {
            const show = showStore.findById(connection.showId);
            const character = getRandomCharacter(show.characters);
            connection.setShowId(connection.showId);
            connection.setCharacterId(character.id);
            connection.setCharactersSet(true);
            updateConnection(connection);
          }}
        >
          Niet tevreden? Verander hier je personage
        </button>
      </section>

      <section>
        <h2>We want to know</h2>
        <p>
          Had je een klik met je personage? Vertel ons hoe je jezelf erin
          herkent. Wij vragen 5 minuten van je tijd.
        </p>
        <Story addStory={addStory} connection={connection} />
      </section>
    </div>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};

export default inject(
  `storyStore`,
  `connectionStore`,
  `characterStore`,
  `showStore`
)(observer(CharacterDetails));
