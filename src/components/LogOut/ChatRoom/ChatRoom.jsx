import React, { useEffect, useState } from "react";
import { doc, addDoc, collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { UserAuth } from "../../../context/AuthContext";

import { orderBy, query } from "firebase/firestore";

import { serverTimestamp } from "firebase/firestore";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const { user } = UserAuth();
  const { uid, photoURL } = user;

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "chatMessages"), {
        text: message,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "chatMessages"), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setMessages(messages)
    });

    return () => unsubscribe;
  }, []);

  return (
    <div>
      <div>
        {messages?.map((message) => (
          <p>{message.text}</p>
        ))}
      </div>

      <div>
        <button onClick={sendMessage}>Send Message</button>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
    </div>
  );
}

export default ChatRoom;
