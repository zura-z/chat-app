import React, { useState, useEffect } from "react";
import Message from "./Message";

import { collection, onSnapshot } from "firebase/firestore";
import { orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import SendMessage from '../SendMessage'

import styles from './Messages.module.css'

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chatMessages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className={styles.Container}>
      <h2>Chat App</h2>

      {messages?.map((message, id) => (
        <Message key={id} message={message} />
      ))}

    </div>
  );
}

export default Messages;
