import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  return (
    <div>
      <Link to={`/chats/${chat.id}`}>{chat.show.title}</Link>
    </div>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default ChatListItem;
