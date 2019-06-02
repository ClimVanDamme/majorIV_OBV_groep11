import React from "react";
// import styles from "./Chat.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import { inject, PropTypes, observer } from "mobx-react";
import ChatListItem from "../components/ChatListItem";

const ChatList = ({ chatStore }) => {
  const { chats } = chatStore;

  return (
    <>
      <section>
        {chats.map(chat => (
          <ChatListItem key={chat.showId} chat={chat} />
        ))}
      </section>
      <TabBar />
    </>
  );
};

ChatList.propTypes = {
  chatStore: PropTypes.observableObject.isRequired
};

export default inject(`chatStore`)(observer(ChatList));
