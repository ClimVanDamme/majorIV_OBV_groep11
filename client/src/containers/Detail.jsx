import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowDetails from "../components/ShowDetails";
import { inject, PropTypes, observer } from "mobx-react";

const Detail = ({ showStore, chatStore, id }) => {
  const show = showStore.findById(id);
  console.log(`dit is de id in Detail container`, id);
  console.log(`dit is de show in Detail container`, show);
  return (
    <>
      <section>
        <ShowDetails show={show} />
      </section>
      <TabBar />
    </>
  );
};

Detail.propTypes = {
  showStore: PropTypes.observableObject.isRequired
};

export default inject(`showStore`, `chatStore`)(observer(Detail));
