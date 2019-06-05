import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ROUTES } from "../constants";

const ProfileButton = ({}) => {
  return (
    <div>
      <Link to={ROUTES.profile}>Profile</Link>
    </div>
  );
};

// ProfileButton.propTypes = {
//   profile: PropTypes.object.isRequired
// };

export default ProfileButton;
