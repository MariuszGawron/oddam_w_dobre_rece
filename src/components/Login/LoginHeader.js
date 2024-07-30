import React from "react";
import { Link } from "react-router-dom";
import "../../scss/LoginHeader.scss";
import ScrollToTop from "../ScrollToTop";

const handleLinkClick = (sectionId) => {
  localStorage.setItem("targetSection", sectionId);
};

const LoginHeader = () => {
  return (
    <header id="login-header" className="login-header">
      <div className="login-header-nav">
        <nav className="login-nav">
          <ul className="login-nav-auth">
            <li>
              <Link to="/login" className="btn">
                Zaloguj się
              </Link>
            </li>
            <li>
              <Link to="/register" className="btn">
                Załóż konto
              </Link>
            </li>
          </ul>
          <ul className="login-nav-list">
            <li>
              <Link to="/" className="btn" onClick={() => handleLinkClick("main-buttons")}>
                Start
              </Link>
            </li>
            <li>
              <Link to="/" className="btn" onClick={() => handleLinkClick("main-four-steps")}>
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link to="/" className="btn" onClick={() => handleLinkClick("home-aboutus")}>
                O nas
              </Link>
            </li>
            <li>
              <Link to="/" className="btn" onClick={() => handleLinkClick("home-whohelp")}>
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link to="/" className="btn" onClick={() => handleLinkClick("home-contact")}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <ScrollToTop />
    </header>
  );
};

export default LoginHeader;
