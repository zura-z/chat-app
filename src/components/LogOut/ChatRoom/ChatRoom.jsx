import React from "react";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

import styles from "./ChatRoom.module.css";
import GIF from "../../../assets/background-gif.gif";

const GIFStyle = {
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0px",
  objectFit: "cover",
  opacity: "0.1",
};

function ChatRoom() {
  return (
    <div className={styles.Container}>
      <img src={GIF} style={GIFStyle} />

      <Messages />
      <SendMessage />
    </div>
  );
}

export default ChatRoom;
