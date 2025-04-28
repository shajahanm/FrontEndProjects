import React from "react";
import "./list.css";
import UserInformation from "./userInfo/UserInformation";
import ChatList from "./chatList/ChatList";

const List = () => {
  return (
    <div className="list">
      <UserInformation />
      <ChatList />
    </div>
  );
};

export default List;
