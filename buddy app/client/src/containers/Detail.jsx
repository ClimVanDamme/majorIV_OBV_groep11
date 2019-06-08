import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowDetails from "../components/ShowDetails";
import { inject, PropTypes, observer } from "mobx-react";

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
  const randomCharacter = characterStore.randomCharacter;
  const addConnection = connectionStore.addConnection;
  const userId = uiStore.authUser._id;

  // console.log(`dit is de id in Detail container`, id);
  // console.log(`dit is de show in Detail container`, show);
  //console.log(`dit is het userId in Detail container`, userId);

  return (
    <>
      <section>
        <ShowDetails
          show={show}
          getRandomCharacter={getRandomCharacter}
          randomCharacter={randomCharacter}
          addConnection={addConnection}
          userId={userId}
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
)(observer(Detail));
