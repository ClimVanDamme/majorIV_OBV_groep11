import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import styles from "./ProfileButton.module.css";

const ProfileButton = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.profile} className={styles.button}>
        Profile
      </Link>
    </div>
  );
};

export default ProfileButton;
