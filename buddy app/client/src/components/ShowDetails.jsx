import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import CharacterQuote from "./CharacterQuote";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { values } from "mobx";
import { ROUTES } from "../constants";
import styles from "./ShowDetails.module.css";

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
  const colorClass = show.title.replace(/\s+/g, `-`).toLowerCase();
  const showImage = `./../assets/img/shows/${show.title
    .replace(/\s+/g, ``)
    .toLowerCase()}.jpg`;

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
      <div className={styles[colorClass]}>
        <button className={styles.back} onClick={() => history.push(`/shows`)}>
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
              <line
                className={styles.st1}
                x1="0.9"
                y1="5.5"
                x2="5.5"
                y2="10.1"
              />
            </g>
          </svg>
        </button>
        <div className={styles.header}>
          <p className={styles.title}>{show.title}</p>
          <img className={styles.thumbnail} src={showImage} alt={show.title} />
          <p className={styles.stat}>{show.length} min.</p>
        </div>
        <p className={styles.desc}>{show.description}</p>
        <div className={styles.myCharacterGrid}>
          <div className={styles[`${colorClass}Bg`]} />
          <img
            className={styles.myCharacter}
            width="320"
            src={`./../assets/img/characters/${connection.character.name
              .replace(/\s+/g, ``)
              .toLowerCase()}.png`}
            alt={connection.character.name}
          />
          <div className={styles.buttonWrapper}>
            <Link
              className={`${styles.button} ${styles.button_prim}`}
              to={ROUTES.chat}
            >
              Chatten als mijn personage
            </Link>
            <button className={`${styles.button} ${styles.button_alt}`}>
              Tickets bestellen
            </button>
          </div>
        </div>
        <div>
          {show.characters.map(character => (
            <div key={character.name} className={styles.characterItem}>
              {/* <CharacterQuote key={character.name} character={character} /> */}
              <img
                width="146"
                height="153"
                src={`./../assets/img/characters/${character.name
                  .replace(/\s+/g, ``)
                  .toLowerCase()}simpel.png`}
                alt={character.name}
              />
              <p className={styles.quote}>{character.quote}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles[colorClass]}>
        <button className={styles.back} onClick={() => history.push(`/shows`)}>
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
              <line
                className={styles.st1}
                x1="0.9"
                y1="5.5"
                x2="5.5"
                y2="10.1"
              />
            </g>
          </svg>
        </button>
        <div className={styles.header}>
          <p className={styles.title}>{show.title}</p>
          <img className={styles.thumbnail} src={showImage} alt={show.title} />
          <p className={styles.stat}>{show.length} min.</p>
        </div>
        <p className={styles.desc}>{show.description}</p>
        <button
          className={`${styles.button} ${styles.button_prim}`}
          onClick={() => {
            setOwnCharacter(getRandomCharacter(show.characters));
          }}
        >
          Geef mij een personage
        </button>
        <button className={`${styles.button} ${styles.button_alt}`}>
          Tickets bestellen
        </button>
        <div>
          {show.characters.map(character => (
            <CharacterQuote key={character.name} character={character} />
          ))}
        </div>
      </div>
    );
  }
};

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired
};

export default withRouter(ShowDetails);
