import React from "react";
import { Link } from "react-router-dom";
import "../../scss/HomeHeader.scss";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li>
            <Link to="/start">Start</Link>
          </li>
          <li>
            <Link to="/about">O co chodzi?</Link>
          </li>
          <li>
            <Link to="/us">O nas</Link>
          </li>
          <li>
            <Link to="/organizations">Fundacja i organizacje</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
        <ul className="home-nav-auth">
          <li>
            <Link to="/login">Zaloguj się</Link>
          </li>
          <li>
            <Link to="/register" className="btn">
              Załóż konto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
