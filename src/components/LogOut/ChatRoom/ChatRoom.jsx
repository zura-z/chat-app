import React from "react";

import Messages from "./Messages";
import SendMessage from "./SendMessage";

function ChatRoom() {
  return (
    <div>
      <Messages />
      <SendMessage />
    </div>
  );
}

export default ChatRoom;
