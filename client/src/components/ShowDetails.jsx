import React from "react";
import { PropTypes } from "prop-types";

const ShowDetails = ({ show }) => {
  return (
    <div>
      <p>{show.title}</p>
    </div>
  );
};

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired
};

export default ShowDetails;
