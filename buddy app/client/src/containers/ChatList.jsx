import React from "react";
// import styles from "./Chat.module.css";
// import stylesLayout from "../styles/layout.module.css";
import TabBar from "../components/TabBar";
import { inject, PropTypes, observer } from "mobx-react";
import ChatListItem from "../components/ChatListItem";
import ProfileButton from "../components/ProfileButton";
import withAuthentication from "../components/auth/WithAuthentication";

const ChatList = ({ chatStore }) => {
  const { chats } = chatStore;
  console.log(chats.length);

  if (chats.length <= 0) {
    return (
      <>
        <p>
          Bekijk de voorstellingen en ontdek je personage om een chat te
          beginnen.
        </p>
        <TabBar />
      </>
    );
  }

  return (
    <>
      <section>
        <ProfileButton />
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

export default inject(`chatStore`)(withAuthentication(observer(ChatList)));
