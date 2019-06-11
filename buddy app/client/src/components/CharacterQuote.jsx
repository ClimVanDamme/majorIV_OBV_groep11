import React from "react";
import { PropTypes } from "prop-types";
import styles from "./CharacterQuote.module.css";

const CharacterQuote = ({ character }) => {
  const image = `./../assets/img/characters/${character.name
    .replace(/\s+/g, ``)
    .toLowerCase()}simpel.png`;
  return (
    <div className={styles.item}>
      <img width="146" height="153" src={image} alt={character.name} />
      <p className={styles.quote}>{character.quote}</p>
    </div>
  );
};

CharacterQuote.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterQuote;
