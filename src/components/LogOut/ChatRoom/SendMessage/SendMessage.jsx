import React, { useState } from "react";

import { serverTimestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../../../../context/AuthContext";
import { db } from "../../../../firebase/config";

import Anonymous from "../../../../assets/anonymous.png";
import styles from "./SendMessage.module.css";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const { user } = UserAuth();
  const { uid, photoURL } = user;

  const sendMessage = async (e) => {
    e.preventDefault();
    setMessage("")

    if (message) {
      try {
        await addDoc(collection(db, "chatMessages"), {
          username: user.displayName || "Anonymous",
          text: message,
          createdAt: serverTimestamp(),
          uid,
          photoURL: photoURL || Anonymous,
        });
      } catch (err) {
        console.log(err);
      }
    }

  };

  return (
    <form onSubmit={(e) => sendMessage(e)} className={styles.Container}>
      <input
        placeholder="Write"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </form>
  );
};

export default SendMessage;
