import React, { useState } from "react";
import "./chat-list.css";
import AddUser from "./addUser/AddUser";
const ChatList = () => {
  const [showUserModal, setUserModal] = useState(false);
  return (
    <div className="chat-list">
      <div className="search">
        <div className="search-bar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={showUserModal ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setUserModal((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John doe</span>
          <p>Hello</p>
        </div>
      </div>
      {showUserModal && <AddUser />}
    </div>
  );
};

export default ChatList;
