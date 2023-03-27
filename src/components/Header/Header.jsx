import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/review">Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
