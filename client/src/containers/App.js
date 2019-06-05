import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.css";

import ChatList from "./ChatList";
import Shows from "./Shows";
import { ROUTES } from "../constants";
import Login from "./Login";
import Register from "./Register";
import Detail from "./Detail";
import Chatroom from "./Chatroom";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <main className={styles.layout}>
        <Switch>
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
          <Route path={ROUTES.profile} component={Profile} />
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.register} component={Register} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
