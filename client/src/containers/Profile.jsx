import React from "react";
// import stylesLayout from "../styles/layout.module.css";
// import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";
import { inject, observer } from "mobx-react";

const Profile = ({ uiStore }) => {
  console.log(uiStore.authUser);
  return (
    <>
      {uiStore.authUser ? (
        <section>
          <h1>Profiel</h1>
          <h2>{uiStore.authUser.firstname}</h2>
          <p>{uiStore.authUser.lastname}</p>
          <button onClick={uiStore.logout}>uitloggen</button>
        </section>
      ) : (
        <p>Je bent niet ingelogd</p>
      )}
      <TabBar />
    </>
  );
};

export default inject(`uiStore`)(Profile);
