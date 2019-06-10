import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowDetails from "../components/ShowDetails";
import { inject, PropTypes, observer } from "mobx-react";
import withAuthentication from "../components/auth/WithAuthentication";

const Detail = ({
  showStore,
  chatStore,
  id,
  characterStore,
  connectionStore,
  uiStore
}) => {
  const show = showStore.findById(id);
  if (!show) {
    return <p>Loading</p>;
  }
  const getRandomCharacter = characterStore.getRandomCharacter;
  const addConnection = connectionStore.addConnection;
  const getConnection = connectionStore.getByShowId;

  return (
    <>
      <section>
        <ShowDetails
          show={show}
          getRandomCharacter={getRandomCharacter}
          addConnection={addConnection}
          getConnection={getConnection}
        />
      </section>
      <TabBar />
    </>
  );
};

Detail.propTypes = {
  showStore: PropTypes.observableObject.isRequired
};

export default inject(
  `showStore`,
  `chatStore`,
  `characterStore`,
  `connectionStore`,
  `uiStore`
)(withAuthentication(observer(Detail)));
