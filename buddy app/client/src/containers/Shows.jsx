import React from "react";
import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import ShowList from "../components/ShowList";
import ProfileButton from "../components/ProfileButton";
import Filter from "../components/Filter";
import { inject, observer } from "mobx-react";
import withAuthentication from "../components/auth/WithAuthentication";

const Shows = ({ showStore }) => {
  return (
    <>
      <h1 className={styles.hidden}>Voorstellingen</h1>
      <section className={styles.container}>
        <div className={styles.profile}>
          <ProfileButton />
        </div>
        <h2 className={styles.title}>Voorstellingen</h2>
        <div className={styles.filter}>
          <Filter
            categories={showStore.categories}
            setFilter={showStore.setFilter}
            filter={showStore._filter}
          />
        </div>
        <div className={styles.shows}>
          <ShowList />
        </div>
      </section>
      <TabBar />
    </>
  );
};

export default inject(`showStore`)(withAuthentication(observer(Shows)));
