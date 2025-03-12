import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#hero" className="logo">
          GR
        </a>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#certificates">Certificados</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
