import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowList from "../components/ShowList";
import ProfileButton from "../components/ProfileButton";

const Shows = () => {
  return (
    <>
      <section>
        <ProfileButton />
        <ShowList />
      </section>
      <TabBar />
    </>
  );
};

export default Shows;
