import React from "react";
// import stylesLayout from "../styles/layout.module.css";
// import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";
import CharacterList from "../components/CharacterList";
import { inject, observer } from "mobx-react";
import withAuthentication from "../components/auth/WithAuthentication";

const Profile = ({ uiStore, connectionStore }) => {
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
          <CharacterList />
        </section>
      ) : (
        <p>Je bent niet ingelogd</p>
      )}
      <TabBar />
    </>
  );
};

export default inject(`uiStore`, `connectionStore`)(
  withAuthentication(observer(Profile))
);
