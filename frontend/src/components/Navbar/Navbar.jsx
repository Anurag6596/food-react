// import React from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";

const Navbar = () => {

    const [menu, setMenu] = useState("home on")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li  className={menu==="home"?"active":""} onClick={()=> setMenu("home")}>Home</li>
        <li  className={menu==="Menu"?"active":""} onClick={()=> setMenu("Menu")}>Menu</li>
        <li  className={menu==="Mobile App"?"active":""} onClick={()=> setMenu("Mobile App")}>Mobile App</li>
        <li  className={menu==="Contact Us"?"active":""} onClick={()=> setMenu("Contact Us")}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
