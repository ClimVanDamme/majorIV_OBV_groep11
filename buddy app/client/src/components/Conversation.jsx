import React from "react";
// import { Link } from "react-router-dom";
// import { inject, PropTypes, observer } from "mobx-react";
import PropTypes from "prop-types";

const Conversation = ({ messages }) => {
  return (
    <ul>
      {messages.map(message => (
        <li>{message.text}</li>
      ))}
    </ul>
  );
};

Conversation.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Conversation;
