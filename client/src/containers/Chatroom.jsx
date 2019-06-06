import React from "react";
// import styles from "./Shows.module.css";
// import stylesLayout from "../styles/layout.module.css";
// import TabBar from "../components/TabBar";
import { inject, PropTypes, observer } from "mobx-react";
import Conversation from "../components/Conversation";

const Chatroom = ({ chatStore, id }) => {
  const chat = chatStore.getById(id);

  if (!chat) {
    return <p>Loading</p>;
  }

  return (
    <>
      <section>
        <p>In de chat</p>
        <Conversation messages={chat.messages} />
      </section>
      {/* <TabBar /> */}
    </>
  );
};

Chatroom.propTypes = {
  chatStore: PropTypes.observableObject.isRequired
};

export default inject(`chatStore`)(observer(Chatroom));
