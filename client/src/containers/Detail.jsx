import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowDetails from "../components/ShowDetails";
import { inject, PropTypes, observer } from "mobx-react";

const Detail = ({ showStore, id }) => {
  const show = showStore.getById(id);
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

export default inject(`showStore`)(observer(Detail));
