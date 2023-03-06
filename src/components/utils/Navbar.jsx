import React, { useState, useEffect } from "react";
import "../scss/nav.scss";
import DevEngineLogo from "../assets/devengine-full.png";
import NavbarLinks from "./NavbarLinks";
import { FaBars, FaAlignRight } from "react-icons/fa";

const Navbar = ({ openHamburgerMenu, isToggleOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <nav className={`navigation ${isScrolled ? "scrolled-navigation" : ""}`}>
        <img src={DevEngineLogo} alt="DevEngine" className="logo-circle" />
        <div
          className={`pos-fixed nav-orientation ${
            isToggleOpen ? "open" : "close"
          }`}
        >
          <NavbarLinks isToggleOpen={isToggleOpen} />
        </div>
        <div className="nav-icon-wrapper" onClick={openHamburgerMenu}>
          {!isToggleOpen ? (
            <FaBars
              className={`nav-icon ${isScrolled ? "c-red" : "c-white"}`}
            />
          ) : (
            <FaAlignRight className={`nav-icon c-red`} />
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
