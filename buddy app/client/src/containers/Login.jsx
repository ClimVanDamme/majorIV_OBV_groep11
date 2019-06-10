import React from "react";

import stylesLayout from "../styles/layout.module.css";
import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <>
      <section className={`${stylesLayout.content}`}>
        <h3 className={stylesTypo.titleTab}>Welkom terug</h3>
        <LoginForm />
      </section>
      <TabBar />
    </>
  );
};

export default Login;
