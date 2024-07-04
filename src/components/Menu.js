import React from "react";
import { Link } from "react-router-dom";

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

export default Menu;
