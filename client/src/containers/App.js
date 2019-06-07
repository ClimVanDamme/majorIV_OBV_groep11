import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.css";
import { inject } from "mobx-react";
import ChatList from "./ChatList";
import Shows from "./Shows";
import { ROUTES } from "../constants";
import Login from "./Login";
import Register from "./Register";
import Detail from "./Detail";
import Chatroom from "./Chatroom";
import Profile from "./Profile";
import CharacterDetail from "./CharacterDetail";

const App = ({ uiStore }) => {
  return (
    <main className={styles.layout}>
      <Switch>
        <Route
          path={ROUTES.landing}
          exact
          strict
          component={uiStore.authUser ? ChatList : Login}
        />
        <Route path={ROUTES.chat} exact strict component={ChatList} />
        <Route
          path={ROUTES.chatroom}
          render={({ match }) => <Chatroom id={match.params.id} />}
        />
        <Route path={ROUTES.shows} exact component={Shows} />
        <Route
          path={ROUTES.showdetail}
          render={({ match }) => <Detail id={match.params.id} />}
        />
        <Route
          path={ROUTES.characterdetail}
          render={({ match }) => <CharacterDetail id={match.params.id} />}
        />
        <Route path={ROUTES.profile} component={Profile} />
        <Route path={ROUTES.login} component={Login} />
        <Route path={ROUTES.register} component={Register} />
      </Switch>
    </main>
  );
};

// export default inject(`uiStore`)(observer(App));

export default inject(`uiStore`)(withRouter(App));
