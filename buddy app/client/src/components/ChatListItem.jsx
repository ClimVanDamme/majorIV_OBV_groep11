import React from "react";
import styles from "./ChatListItem.module.css";
import { observer } from "mobx-react";

import { PropTypes } from "prop-types";

const ChatListItem = ({ chat }) => {
  console.log(chat, `dit is de chat in chatlist`);

  if (chat && !chat.connection) {
    return <p>loading</p>;
  }

  console.log(chat.connection.character);

  return (
    <a className={styles.item} href={`https://discord.gg/uzxh6fm`}>
      <img
        className={styles.img}
        src={`${
          process.env.PUBLIC_URL
        }/assets/img/characters/${chat.connection.character.name
          .replace(/\s+/g, ``)
          .toLowerCase()}simpel.png`}
        alt={chat.connection.character.name}
      />
      <div
        className={`${styles.circle} ${
          styles[chat.connection.show.title.replace(/\s+/g, ``).toLowerCase()]
        }`}
      />
      <div className={styles.message}>
        <p className={styles.charName}> {chat.connection.character.name}</p>
        <p className={styles.messageText}>
          {chat.connection.character.name}: ik...
        </p>
      </div>
      <p className={styles.time}>17:29</p>
    </a>
  );
};

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired
};

export default observer(ChatListItem);
