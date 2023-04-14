import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

import { collection, onSnapshot } from "firebase/firestore";
import { orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import styles from "./Messages.module.css";

function Messages() {
  const bottomRef = useRef(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chatMessages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }));

  return (
    <div className={styles.Container}>
      <h2>Chat App</h2>

      {messages?.map((message, id) => (
        <Message key={id} message={message} />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}

export default Messages;
