import React from "react";
import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  return (
    <div>
      <p>{chat.show.title}</p>
    </div>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default ChatListItem;
