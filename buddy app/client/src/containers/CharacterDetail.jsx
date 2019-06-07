import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import CharacterDetails from "../components/CharacterDetails";
import { inject, PropTypes, observer } from "mobx-react";

const CharacterDetail = ({ id, characterStore }) => {
  const character = characterStore.getById(id);
  if (!character) {
    return <p>Loading</p>;
  }

  return (
    <>
      <section>
        <CharacterDetails character={character} />
      </section>
      <TabBar />
    </>
  );
};

CharacterDetail.propTypes = {
  characterStore: PropTypes.observableObject.isRequired
};

export default inject(`characterStore`)(observer(CharacterDetail));
