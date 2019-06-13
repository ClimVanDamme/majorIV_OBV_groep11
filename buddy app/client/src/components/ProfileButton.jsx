import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import styles from "./ProfileButton.module.css";

const ProfileButton = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.profile} className={styles.button}>
        <img
          className={styles.icon}
          src={`${process.env.PUBLIC_URL}/assets/img/profileIcon.png`}
          alt="Profiel icon"
        />
      </Link>
    </div>
  );
};

export default ProfileButton;
