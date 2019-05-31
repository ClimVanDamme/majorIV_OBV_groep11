import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styles from "./App.module.css";

import Chat from "./Chat";
import Shows from "./Shows";
import { ROUTES } from "../constants";
import Login from "./Login";
import Register from "./Register";

class App extends Component {
  render() {
    return (
      <main className={styles.layout}>
        <Switch>
          <Route path={ROUTES.chat} exact strict component={Chat} />
          <Route path={ROUTES.shows} component={Shows} />
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.register} component={Register} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
