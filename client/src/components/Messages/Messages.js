import React from "react";


import SendChat from "../pages/chat/SendChat"
import ReceiveChat from "../pages/chat/ReceiveChat"
import "./Messages.css";

const Messages = ({ messages, name }) => (
  <div className="messages">
    {messages.map((message, i) => 
    <div>
       { name=='ahyeon'?<SendChat message={message}  />:<ReceiveChat message={message} />}
        </div>

  )}
  </div>
);

export default Messages;
