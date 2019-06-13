import React from "react";
import styles from "./ChatListItem.module.css";
import { observer } from "mobx-react";

import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  if (!chat.connection) {
    return <p>loading</p>;
  }

  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={`${
          process.env.PUBLIC_URL
        }/assets/img/characters/${chat.connection.character.name
          .replace(/\s+/g, ``)
          .toLowerCase()}simpel.png`}
        alt={chat.connection.character.name}
      />
      <a href={`https://discord.gg/uzxh6fm`}>{chat.show.title}</a>
    </div>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default observer(ChatListItem);
