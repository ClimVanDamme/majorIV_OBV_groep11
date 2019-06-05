import React, { Component } from "react";
import { inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../constants";
import stylesForm from "../../styles/form.module.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ``,
      pwd: ``,
      pwd2: ``,
      firstname: ``,
      lastname: ``,
      gender: ``,
      birthdate: ``
    };
  }

  handleChange = e => {
    const input = e.currentTarget;
    const state = { ...this.state };
    state[input.name] = input.value;
    this.setState(state);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { uiStore, history } = this.props;
    const { email, pwd, firstname, lastname, gender, birthdate } = this.state;
    uiStore
      .register(firstname, lastname, email, pwd, gender, birthdate)
      .then(() => {
        history.push(ROUTES.login);
      });
  };

  render() {
    const { email, pwd, pwd2, firstname, lastname, birthdate } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={stylesForm.form}>
          <label htmlFor="firstname">
            Voornaam
            <input
              type="text"
              name="firstname"
              id="firstname="
              value={firstname}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="lastname">
            Achternaam
            <input
              type="text"
              name="lastname"
              id="lastname="
              value={lastname}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="gender">
            Geslacht
            <div>
              <input
                type="radio"
                id="gender-male"
                name="gender"
                value="man"
                onChange={this.handleChange}
              />
              <label htmlFor="gender-male">Man</label>
              <input
                type="radio"
                id="gender-female"
                name="gender"
                value="vrouw"
                onChange={this.handleChange}
              />
              <label htmlFor="gender-female">Vrouw</label>
            </div>
          </label>

          <label htmlFor="birthdate">
            Geboortedatum
            <input
              type="date"
              name="birthdate"
              id="birthdate="
              value={birthdate}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email="
              value={email}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Wachtwoord
            <input
              type="password"
              name="pwd"
              id="pwd"
              value={pwd}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Herhaal wachtwoord
            <input
              type="password"
              name="pwd2"
              id="pwd2"
              ref={pwd2}
              className={stylesForm.form_input}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="Register"
            className={stylesForm.button}
            disabled={pwd && pwd !== pwd2}
          />
        </form>
      </>
    );
  }
}

export default inject(`uiStore`)(withRouter(RegisterForm));
