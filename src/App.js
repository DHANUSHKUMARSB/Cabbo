import { useState } from "react";

function App() {
  // start code here
  return (
    <div className="hero">
      <Nav />
    </div>
  );
}
function Menu({ isOpen }) {
  const menu = [
    "Home",
    "About Us",
    "Safety",
    "Careers",
    "Community",
    "Contact Us",
  ];

  return (
    <div className={`menu-content ${isOpen ? "active" : ""}`}>
      {menu.map((data, index) => (
        <span className="menu-item" key={index}>
          {data}
        </span>
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
export default App;
