// import React from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu, setMenu] = useState("home on")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' className={menu==="home"?"active":""} onClick={()=> setMenu("home")}>Home</Link>
        <a href="#menu" className={menu==="Menu"?"active":""} onClick={()=> setMenu("Menu")}>Menu</a>
        <a href="#app-download" className={menu==="Mobile App"?"active":""} onClick={()=> setMenu("Mobile App")}>Mobile App</a>
        <a href="#footer" className={menu==="Contact Us"?"active":""} onClick={()=> setMenu("Contact Us")}>Contact Us</a>
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
