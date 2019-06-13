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
  history,
  comingFrom
}) => {
  const { addStory } = storyStore;
  const connection = connectionStore.getByCharId(character.id);
  const { getRandomCharacter } = characterStore;
  const { updateConnection } = connectionStore;

  switch (comingFrom) {
    case `acc`:
      return (
        <div>
          <button
            className={styles.back}
            onClick={() => history.push(`/profile`)}
          >
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
          <h1 className={styles.hide}>{character.name}</h1>
          <section>
            <div className={styles.imgGrid}>
              <img
                className={styles.charImg}
                src={`%PUBLIC_URL%/assets/img/characters/${character.name
                  .replace(/\s+/g, ``)
                  .toLowerCase()}.png`}
                alt={`${character.name}`}
              />
              <div
                className={`
                    ${
                      styles[
                        character.show.title.replace(/\s+/g, ``).toLowerCase()
                      ]
                    } ${styles.rect}
                  `}
              />
            </div>
            <ul className={styles.traits}>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="29.7px"
                  height="37.5px"
                  viewBox="0 0 29.7 37.5"
                >
                  <defs />
                  <circle className={styles.st0_1} cx="8.1" cy="20.2" r="7.1" />
                  <line
                    className={styles.st0_1}
                    x1="8"
                    y1="27.4"
                    x2="8"
                    y2="36.5"
                  />
                  <line
                    className={styles.st0_1}
                    x1="4.2"
                    y1="31.7"
                    x2="11.9"
                    y2="31.7"
                  />
                  <g>
                    <circle
                      className={styles.st1_1}
                      cx="17.2"
                      cy="12.7"
                      r="8.8"
                    />
                    <circle
                      className={styles.st2_1}
                      cx="17.3"
                      cy="12.5"
                      r="7.1"
                    />
                    <line
                      className={styles.st0_1}
                      x1="22.6"
                      y1="7.5"
                      x2="28.2"
                      y2="1.9"
                    />
                    <polyline
                      className={styles.st0_1}
                      points="24.4,2 28.7,1 28.2,5.8 	"
                    />
                  </g>
                </svg>
                <p>{character.traits[0]}</p>
              </li>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="37.1px"
                  height="31.6px"
                  viewBox="0 0 37.1 31.6"
                >
                  <defs />
                  <path
                    className={styles.st0_2}
                    d="M31.5,17.8c0,0-1.9,1.7-2.7-0.9"
                  />
                  <path
                    className={styles.st0_2}
                    d="M25,15.4c0,0-1.9,1.7-2.7-0.9"
                  />
                  <path
                    className={styles.st1_2}
                    d="M21.6,7.6l13.1,4.6c1.1,0.4,1.8,1.5,1.6,2.7c-0.7,3.7-2.7,11.5-8.8,15c-4.7,2.7-10.5-0.3-11.4-5.6
	c-0.7-4.5,0-10.4,2.7-15.6C19.3,7.6,20.5,7.2,21.6,7.6z"
                  />
                  <path
                    className={styles.st2_2}
                    d="M3.1,3.7L17.6,1c1.2-0.2,2.4,0.5,2.8,1.6c1.3,3.8,3.6,12-0.2,18.5c-2.9,5-9.9,5.3-13.5,0.8
	C3.6,18.2,1.2,12.4,1,6.2C1,5,1.9,4,3.1,3.7z"
                  />
                  <path
                    className={styles.st3_2}
                    d="M10.6,19.3l6.1-1.4c0.2,0,0.3,0.1,0.3,0.3c-0.2,0.8-0.8,2.8-2.5,3.2c-1.7,0.4-3.3-1.1-4-1.8
	C10.3,19.5,10.4,19.3,10.6,19.3z"
                  />
                  <path
                    className={styles.st4_2}
                    d="M7.2,11.5c0,0,0.6-2.5,2.8-0.7"
                  />
                  <path
                    className={styles.st4_2}
                    d="M13.9,10c0,0,0.6-2.5,2.8-0.7"
                  />
                  <path
                    className={styles.st5_2}
                    d="M26.4,27.1l-5.6-2.6c-0.1-0.1-0.2-0.3-0.1-0.4c0.6-0.5,2.3-1.8,3.9-1c1.6,0.7,2,2.9,2.1,3.8
	C26.7,27.1,26.5,27.2,26.4,27.1z"
                  />
                </svg>

                <p>{character.traits[1]}</p>
              </li>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22.4px"
                  height="19.8px"
                  viewBox="0 0 22.4 19.8"
                >
                  <defs />
                  <path
                    className={styles.st0_3}
                    d="M11,18.8c0,0-8.5-3.9-9.9-11.4s8.1-8.3,10-3.1"
                  />
                  <path
                    className={styles.st0_3}
                    d="M11.3,18.8c0,0,8.5-3.9,9.9-11.4s-8.1-8.3-10-3.1"
                  />
                </svg>

                <p>{character.traits[1]}</p>
              </li>
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

    default:
      return (
        <div>
          <button
            className={styles.back}
            onClick={() => history.push(`/profile`)}
          >
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
          <h1 className={styles.hide}>{character.name}</h1>
          <section>
            <div className={styles.imgGrid}>
              <img
                className={styles.charImg}
                src={`${
                  process.env.PUBLIC_URL
                }/assets/img/characters/${character.name
                  .replace(/\s+/g, ``)
                  .toLowerCase()}.png`}
                alt={`${character.name}`}
              />
              <div
                className={`
                    ${
                      styles[
                        character.show.title.replace(/\s+/g, ``).toLowerCase()
                      ]
                    } ${styles.rect}
                  `}
              />
            </div>
            <ul className={styles.traits}>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="29.7px"
                  height="37.5px"
                  viewBox="0 0 29.7 37.5"
                >
                  <defs />
                  <circle className={styles.st0_1} cx="8.1" cy="20.2" r="7.1" />
                  <line
                    className={styles.st0_1}
                    x1="8"
                    y1="27.4"
                    x2="8"
                    y2="36.5"
                  />
                  <line
                    className={styles.st0_1}
                    x1="4.2"
                    y1="31.7"
                    x2="11.9"
                    y2="31.7"
                  />
                  <g>
                    <circle
                      className={styles.st1_1}
                      cx="17.2"
                      cy="12.7"
                      r="8.8"
                    />
                    <circle
                      className={styles.st2_1}
                      cx="17.3"
                      cy="12.5"
                      r="7.1"
                    />
                    <line
                      className={styles.st0_1}
                      x1="22.6"
                      y1="7.5"
                      x2="28.2"
                      y2="1.9"
                    />
                    <polyline
                      className={styles.st0_1}
                      points="24.4,2 28.7,1 28.2,5.8 	"
                    />
                  </g>
                </svg>
                <p>{character.traits[0]}</p>
              </li>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="37.1px"
                  height="31.6px"
                  viewBox="0 0 37.1 31.6"
                >
                  <defs />
                  <path
                    className={styles.st0_2}
                    d="M31.5,17.8c0,0-1.9,1.7-2.7-0.9"
                  />
                  <path
                    className={styles.st0_2}
                    d="M25,15.4c0,0-1.9,1.7-2.7-0.9"
                  />
                  <path
                    className={styles.st2_2}
                    d="M3.1,3.7L17.6,1c1.2-0.2,2.4,0.5,2.8,1.6c1.3,3.8,3.6,12-0.2,18.5c-2.9,5-9.9,5.3-13.5,0.8
	C3.6,18.2,1.2,12.4,1,6.2C1,5,1.9,4,3.1,3.7z"
                  />
                  <path
                    className={styles.st3_2}
                    d="M10.6,19.3l6.1-1.4c0.2,0,0.3,0.1,0.3,0.3c-0.2,0.8-0.8,2.8-2.5,3.2c-1.7,0.4-3.3-1.1-4-1.8
	C10.3,19.5,10.4,19.3,10.6,19.3z"
                  />
                  <path
                    className={styles.st4_2}
                    d="M7.2,11.5c0,0,0.6-2.5,2.8-0.7"
                  />
                  <path
                    className={styles.st4_2}
                    d="M13.9,10c0,0,0.6-2.5,2.8-0.7"
                  />
                  <path
                    className={styles.st5_2}
                    d="M26.4,27.1l-5.6-2.6c-0.1-0.1-0.2-0.3-0.1-0.4c0.6-0.5,2.3-1.8,3.9-1c1.6,0.7,2,2.9,2.1,3.8
	C26.7,27.1,26.5,27.2,26.4,27.1z"
                  />
                </svg>

                <p>{character.traits[1]}</p>
              </li>
              <li>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22.4px"
                  height="19.8px"
                  viewBox="0 0 22.4 19.8"
                >
                  <defs />
                  <path
                    className={styles.st0_3}
                    d="M11,18.8c0,0-8.5-3.9-9.9-11.4s8.1-8.3,10-3.1"
                  />
                  <path
                    className={styles.st0_3}
                    d="M11.3,18.8c0,0,8.5-3.9,9.9-11.4s-8.1-8.3-10-3.1"
                  />
                </svg>

                <p>{character.traits[1]}</p>
              </li>
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
              <h2 className={styles.subtitle}>Chatten als je personage?</h2>
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
                history.push(`/characters/show/${character.id}`);
              }}
            >
              <p className={styles.changeText}>
                Niet tevreden? <br />
                Verander hier je personage
              </p>
            </button>
          </div>
        </div>
      );
  }
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
