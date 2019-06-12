import React from "react";
import { PropTypes } from "prop-types";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Story from "./Story";
import styles from "./CharacterDetails.module.css";

// import { observer } from "mobx-react";

const CharacterDetails = ({
  character,
  storyStore,
  connectionStore,
  characterStore,
  showStore,
  history
}) => {
  const { addStory } = storyStore;
  const connection = connectionStore.getByCharId(character.id);
  const { getRandomCharacter } = characterStore;
  const { updateConnection } = connectionStore;

  return (
    <div>
      <button className={styles.back} onClick={() => history.push(`/profile`)}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="12.8px"
          height="11px"
          viewBox="0 0 12.8 11"
        >
          <g>
            <polyline
              className={styles.st0}
              points="11.9,5.5 0.9,5.5 5.5,0.9 	"
            />
            <line className={styles.st1} x1="0.9" y1="5.5" x2="5.5" y2="10.1" />
          </g>
        </svg>
      </button>
      <h1 className={styles.hide}>{character.name}</h1>
      <section>
        <div className={styles.imgGrid}>
          <img
            className={styles.charImg}
            src={`../assets/img/characters/${character.name
              .replace(/\s+/g, ``)
              .toLowerCase()}.png`}
            alt={`${character.name}`}
          />
          <div
            className={`
              ${
                styles[character.show.title.replace(/\s+/g, ``).toLowerCase()]
              } ${styles.rect}
            `}
          />
        </div>
        <ul className={styles.traits}>
          {character.traits.map(trait => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>

      <div className={styles.contentGrid}>
        <section className={styles.personality}>
          <h2 className={styles.subtitle}>Karakter</h2>
          <p className={styles.paragraph}>{character.personality}</p>
        </section>

        <section className={styles.story}>
          <h2 className={styles.subtitle}>Verhaal</h2>
          <p className={styles.paragraph}>{character.story}</p>
        </section>

        <section className={styles.chat}>
          <h2 className={styles.subtitle}>Chatten met je personage?</h2>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.noButton}
              onClick={() => {
                history.push(`/shows/${character.showId}`);
              }}
            >
              Nee
            </button>
            <button
              className={styles.yesButton}
              onClick={() => {
                history.push(`/chats`);
              }}
            >
              Ja
            </button>
          </div>
        </section>

        <button
          className={styles.changeButton}
          onClick={() => {
            const show = showStore.findById(connection.showId);
            const character = getRandomCharacter(show.characters);
            connection.setShowId(connection.showId);
            connection.setCharacterId(character.id);
            connection.setCharactersSet(true);
            updateConnection(connection);
            history.push(`/characters/${character.id}`);
          }}
        >
          <p className={styles.changeText}>
            Niet tevreden? <br />
            Verander hier je personage
          </p>
        </button>

        <section className={styles.shareStory}>
          <h2 className={styles.subtitle}>We want to know</h2>
          <p className={styles.paragraph}>
            Had je een klik met je personage? Vertel ons hoe je jezelf erin
            herkent.
          </p>
          <Story addStory={addStory} connection={connection} />
        </section>
      </div>
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
)(withRouter(observer(CharacterDetails)));
