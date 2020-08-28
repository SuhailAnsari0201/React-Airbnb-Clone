import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SerachIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="alt"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SerachIcon />
      </div>
      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
