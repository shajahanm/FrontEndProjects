import React from "react";
import "./user-information.css";
const UserInformation = () => {
  return (
    <div className="user-information">
      <div className="user">
        <img src="./avatar.png" alt="avatar" />
        <h2>John Doe</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInformation;
