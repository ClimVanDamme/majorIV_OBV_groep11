import React from "react";
// import stylesLayout from "../styles/layout.module.css";
// import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";
import { inject, observer } from "mobx-react";

const Profile = ({ uiStore, connectionStore }) => {
  console.log(uiStore.authUser);

  return (
    <>
      {uiStore.authUser ? (
        <section>
          <h1>Profiel</h1>
          <p>{uiStore.authUser._id}</p>
          <h2>{uiStore.authUser.firstname}</h2>
          <p>{uiStore.authUser.lastname}</p>
          <p>{uiStore.authUser.gender}</p>
          <p>{uiStore.authUser.birthday}</p>
          <button onClick={uiStore.logout}>uitloggen</button>
          {connectionStore.connections.map(conn => (
            <p key={conn.id}>{conn.character.name}</p>
          ))}
        </section>
      ) : (
        <p>Je bent niet ingelogd</p>
      )}
      <TabBar />
    </>
  );
};

export default inject(`uiStore`, `connectionStore`)(observer(Profile));