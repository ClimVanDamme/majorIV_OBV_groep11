import React from "react";
import styles from "./ChatListItem.module.css";
import { observer } from "mobx-react";

import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  console.log(chat.connection);

  return (
    <div className={styles.item}>
      <a href={`https://discord.gg/uzxh6fm`}>{chat.show.title}</a>
    </div>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default observer(ChatListItem);
