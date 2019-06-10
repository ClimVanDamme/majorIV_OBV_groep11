import React from "react";
// import styles from "./Shows.module.css";
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
      <section>
        <ProfileButton />
        <ShowList />
        <Filter
          categories={showStore.categories}
          setFilter={showStore.setFilter}
        />
      </section>
      <TabBar />
    </>
  );
};

export default inject(`showStore`)(withAuthentication(observer(Shows)));
