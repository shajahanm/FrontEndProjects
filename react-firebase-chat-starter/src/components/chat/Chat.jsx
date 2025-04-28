import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio eaque exercitationem provident illo rem
              ipsam eveniet harum odit ea. Temporibus repudiandae cumque maiores
              doloremque, expedita esse sunt tempore debitis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            // onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          //   placeholder={
          //     isCurrentUserBlocked || isReceiverBlocked
          //       ? "You cannot send a message"
          //       : "Type a message..."
          //   }
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          //   disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
          <div className="picker">
            {/*  onEmojiClick={handleEmoji} */}
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          //   onClick={handleSend}
          //   disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
