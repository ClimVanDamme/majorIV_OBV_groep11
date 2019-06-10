import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

const CharacterList = ({ connections }) => {
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
  connections: PropTypes.object.isRequired
};

export default observer(CharacterList);
