import React from "react";
import { Link } from "react-router-dom";
import { inject, PropTypes, observer } from "mobx-react";

const CharacterList = ({ connectionStore }) => {
  const { connections } = connectionStore;
  return (
    <ul>
      {connections.map(conn => (
        <li key={conn.id}>
          <Link to={`/characters/${conn.character.id}`}>
            {conn.character.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  connectionStore: PropTypes.observableObject.isRequired
};

export default inject(`connectionStore`)(observer(CharacterList));
