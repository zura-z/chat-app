import React from "react";

function Message({ message }) {
  const { text, photoURL } = message;

  return (
    <div>
      <img src={photoURL} alt="photo" />
      <p>{text}</p>
    </div>
  );
}

export default Message;
