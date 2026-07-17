import { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="brand">
          <img src="/icons/logo.png" alt="" aria-hidden="true" />
          <div>
            <p className="brand__title-top">Bappa</p>
            <p className="brand__title-bottom">Ayurveda</p>
          </div>
        </a>

        <nav className="navbar">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="menu-btn"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2C4A3E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2C4A3E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>

          <ul
            id="primary-navigation"
            className={`nav-links ${isOpen ? "active" : ""}`}
          >
            <li>
              <a href="#" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Shop
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu} className="selected">
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
