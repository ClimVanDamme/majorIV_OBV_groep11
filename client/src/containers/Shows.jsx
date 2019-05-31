import React from "react";
import styles from "./Shows.module.css";
import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowList from "../components/ShowList";

const Shows = () => {
  return (
    <>
      <section>
        <ShowList />
      </section>
      <TabBar />
    </>
  );
};

export default Shows;
