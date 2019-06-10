import React from "react";

import stylesLayout from "../styles/layout.module.css";
import stylesTypo from "../styles/typo.module.css";
import TabBar from "../components/TabBar";

import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <section className={`${stylesLayout.content}`}>
        <h3 className={stylesTypo.titleTab}>Hello</h3>
        <RegisterForm />
      </section>
      <TabBar />
    </>
  );
};

export default Register;
