import { Search, ShoppingCartSharp } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <div className="header__logo">
          <img src="./images/logo.jpg" className="header__logo" />
        </div>
      </Link>
      <div className="header__search">
        <input placeholder="Search in a specific category ..." />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav" style={{ right: showMenu ? "0" : "-100%" }}>
        <Link
          className="header__link"
          to="/login"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <div className="header__option">
            <small>Welcome, Guest</small>
            <strong>Sign In</strong>
          </div>
        </Link>
        <Link
          className="header__link"
          to="/"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <div className="header__option">
            <small>About</small>
            <strong>Samarkand</strong>
          </div>
        </Link>

        <Link
          className="header__link"
          to="/"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <div className="header__option">
            <small>News</small>
            <strong>& Events</strong>
          </div>
        </Link>
        <Link
          className="header__link"
          to="/checkout"
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          <div className="header__optionBasket">
            <ShoppingCartSharp />
            <strong className="header__counter">{basket.length}</strong>
          </div>
        </Link>
      </div>
      <div className="header__menu">
        <IconButton onClick={() => setShowMenu((prevState) => !prevState)}>
          <MenuBookIcon className="header__menuIcon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
