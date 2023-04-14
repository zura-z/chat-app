import React from "react";
import styles from "./Messages.module.css";
import { UserAuth } from "../../../../context/AuthContext";

function Message({ message }) {
  const { user } = UserAuth();
  const { text, photoURL, uid } = message;

  const messageClass = uid === user.uid ? `${styles.Sent}` : `${styles.Received}`;

  return (
    <div className={`${messageClass} ${styles.Message}`}>
      <h5>{user.displayName || "Anonymous"}</h5>
      <img src={photoURL} className="lightIMG" />
      <p>{text}</p>
    </div>
  );
}

export default Message;
