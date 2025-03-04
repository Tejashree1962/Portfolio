import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="navbar">
      <div className="logo">Tejashree</div>
      <img src={underline} alt="Logo" className="nav-logo" />
      {/*<img src={logo} alt="Logo" className="nav-logo" />*/}

      {/* Show menu open icon only when menu is closed */}
      {!menuOpen && (
        <img
          src={menu_open}
          alt="Open Menu"
          className="nav-mob-open"
          onClick={() => setMenuOpen(true)}
        />
      )}

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {/* Close button inside the sidebar */}
        {menuOpen && (
          <img
            src={menu_close}
            alt="Close Menu"
            className="nav-mob-close"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => handleMenuClick("home")}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleMenuClick("about")}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => handleMenuClick("services")}>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => handleMenuClick("work")}>
            <p>Projects</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleMenuClick("contact")}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Desktop Connect Button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
