import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import styles from "./CharacterList.module.css";

const CharacterList = ({ connections }) => {
  return (
    <ul className={styles.tileGrid}>
      {connections.map(conn => (
        <li key={conn.id}>
          <Link to={`/characters/${conn.character.id}`}>
            <img
              className={`${styles.tile} ${
                styles[conn.show.title.replace(/\s+/g, ``).toLowerCase()]
              }`}
              src={`./assets/img/characters/${conn.character.name
                .replace(/\s+/g, ``)
                .toLowerCase()}.png`}
              alt={conn.character.name}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  connections: PropTypes.object.isRequired
};

export default observer(CharacterList);
