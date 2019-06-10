import React from "react";
// import stylesLayout from "../styles/layout.module.css";
// import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";
import CharacterList from "../components/CharacterList";
import UserInfo from "../components/UserInfo";
import { inject, observer } from "mobx-react";
import withAuthentication from "../components/auth/WithAuthentication";

const Profile = ({ uiStore, connectionStore }) => {
  const { connections } = connectionStore;
  return (
    <>
      {uiStore.authUser ? (
        <section>
          <UserInfo user={uiStore.authUser} />
          <button onClick={uiStore.logout}>uitloggen</button>
          <CharacterList connections={connections} />
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
