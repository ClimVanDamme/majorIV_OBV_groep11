import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

const ProfileButton = () => {
  return (
    <div>
      <Link to={ROUTES.profile}>Profile</Link>
    </div>
  );
};

export default ProfileButton;
