import React from "react";
import "./chat-list.css";
const ChatList = () => {
  return (
    <div className="chat-list">
      <div className="search">
        <div className="search-bar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src="./plus.png" alt="" />
      </div>
    </div>
  );
};

export default ChatList;
