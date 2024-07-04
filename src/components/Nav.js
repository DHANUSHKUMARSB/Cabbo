import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Menu({ isOpen }) {
  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Safety", path: "/safety" },
    { title: "Careers", path: "/careers" },
    { title: "Community", path: "/community" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className={`menu-content ${isOpen ? "active" : ""}`}>
      {menu.map((item, index) => (
        <Link to={item.path} key={index} className="menu-item">
          {item.title}
        </Link>
      ))}
    </div>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <img className="logo" src="Images/Logo.png" alt="logo" />
      <div className="menu">
        <img
          className="ham"
          src="Images/Menu.png"
          alt="ham"
          onClick={toggleMenu}
        />
        <Menu isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Nav;
