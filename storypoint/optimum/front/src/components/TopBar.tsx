import React from "react";
import "./Hero.css";
import bell_iconImg from "../assets/bell_icon.png";
import msg_iconImg from "../assets/msg_icon.png";
import userImg from "../assets/user.png";

const TopBar = () => {
  return (
    <div className="hero-top-container">
      <div className="top-left">
        <img className="top-icon" src={bell_iconImg} />
        <img className="top-icon" src={msg_iconImg} />
        <input className="search-inp" dir="rtl" placeholder="חיפוש" />
      </div>
      <div className="top-right">
        <div className="name-container">
          <span className="name">
            שי טקסלר <br />
          </span>
          <span>מנכ״ל</span>
        </div>
        <div>
          <img src={userImg} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
