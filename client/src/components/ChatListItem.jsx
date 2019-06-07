import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  console.log(chat);

  return (
    <div>
      <a href={`https://discord.gg/uzxh6fm`}>{chat.show.title}</a>
    </div>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default ChatListItem;
