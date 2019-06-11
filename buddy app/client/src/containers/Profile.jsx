import React from "react";
import ProfileButton from "../components/ProfileButton";
import TabBar from "../components/TabBar";
import CharacterList from "../components/CharacterList";
import UserInfo from "../components/UserInfo";
import { inject, observer } from "mobx-react";
import withAuthentication from "../components/auth/WithAuthentication";
import styles from "./Profile.module.css";

const Profile = ({ uiStore, connectionStore }) => {
  const { connections } = connectionStore;
  const noOfChar = connections.length;
  return (
    <>
      <h1 className={styles.hide}>Profiel</h1>
      {uiStore.authUser ? (
        <section className={styles.profileGrid}>
          <div className={styles.centerButton}>
            <div className={styles.button}>
              <ProfileButton />
            </div>
          </div>
          <div className={styles.userInfo}>
            <UserInfo
              user={uiStore.authUser}
              noOfChar={noOfChar}
              logout={uiStore.logout}
            />
          </div>
          <div className={styles.characters}>
            <CharacterList connections={connections} />
          </div>
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
