import React from "react";
import { ROUTES } from "../constants";
import { Link } from "react-router-dom";
import TabBar from "../components/TabBar";
import { inject, PropTypes, observer } from "mobx-react";
import ChatListItem from "../components/ChatListItem";
import ProfileButton from "../components/ProfileButton";
import withAuthentication from "../components/auth/WithAuthentication";
import styles from "./ChatList.module.css";

const ChatList = ({ chatStore }) => {
  const { chats } = chatStore;
  console.log(chats);
  console.log(`chatlist`);

  if (chats.length <= 0) {
    return (
      <>
        <section className={styles.container}>
          <h1 className={styles.title}>Chats</h1>
          <div className={styles.profile}>
            <ProfileButton />
          </div>
          <div className={styles.filter}>
            <input type="text" name="filter" id="filter" />
          </div>
          <img
            className={styles.img}
            src={`${process.env.PUBLIC_URL}/assets/img/legechat.png`}
            alt="Personage met vraagteken en bekertjes"
          />
          <div className={styles.emptyMessage}>
            <p>
              Bekijk de voorstellingen en ontdek je personage om een chat te
              beginnen.
            </p>
            <Link
              className={`${styles.button} ${styles.button_prim}`}
              to={ROUTES.shows}
            >
              Bekijk de voorstellingen
            </Link>
          </div>
        </section>
        <TabBar />
      </>
    );
  }

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Chats</h1>
        <div className={styles.profile}>
          <ProfileButton />
        </div>
        <div className={styles.chatList}>
          {chats.map(chat => (
            <ChatListItem key={chat.showId} chat={chat} />
          ))}
        </div>
      </section>
      <TabBar />
    </>
  );
};

ChatList.propTypes = {
  chatStore: PropTypes.observableObject.isRequired
};

export default inject(`chatStore`)(withAuthentication(observer(ChatList)));
