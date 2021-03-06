import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import stylesForm from "../../styles/form.module.css";

const LoginForm = ({ uiStore, history }) => {
  const emailInput = React.createRef();
  const pwdInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    uiStore.login(emailInput.current.value, pwdInput.current.value).then(() => {
      history.push(ROUTES.chat);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={stylesForm.form}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email="
            ref={emailInput}
            className={stylesForm.form_input}
          />
        </label>
        <label htmlFor="username">
          Password
          <input
            type="password"
            name="password"
            id="password"
            ref={pwdInput}
            className={stylesForm.form_input}
          />
        </label>
        <input type="submit" value="Login" className={stylesForm.button} />
      </form>

      <p className={stylesForm.metaAction}>
        <Link to={ROUTES.register}>geen account? Registreer nu!</Link>
      </p>
    </>
  );
};

export default inject(`uiStore`)(withRouter(LoginForm));
