import React, { useState } from "react";

import { serverTimestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from "../../../../context/AuthContext";
import { db } from "../../../../firebase/config";

import Anonymous from '../../../../assets/anonymous.png'

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const { user } = UserAuth();
  const { uid, photoURL } = user;

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, "chatMessages"), {
        text: message,
        createdAt: serverTimestamp(),
        uid,
        photoURL: photoURL || Anonymous,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
};

export default SendMessage;
