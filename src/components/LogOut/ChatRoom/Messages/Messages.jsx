import React, { useState, useEffect } from "react";
import Message from "./Message";

import { collection, onSnapshot } from "firebase/firestore";
import { orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/config";

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

  return messages?.map((message, id) => <Message key={id} message={message} />);
}

export default Messages;
