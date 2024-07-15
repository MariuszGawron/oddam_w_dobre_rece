import React from "react";
import { Link } from "react-router-dom";
import "../../scss/HomeHeader.scss";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeMainButtons from "./HomeMainButtons";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="home-img"></div>
      <div className="home-header-nav">
        <nav className="home-nav">
          <ul className="home-nav-auth">
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
          <ul className="home-nav-list">
            <li>
              <Link to="/start" className="btn">
                Start
              </Link>
            </li>
            <li>
              <Link to="/about" className="btn">
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link to="/us" className="btn">
                O nas
              </Link>
            </li>
            <li>
              <Link to="/organizations" className="btn">
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link to="/contact" className="btn">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <HomeThreeColumns />
        <HomeMainButtons />
      </div>
    </header>
  );
};

export default HomeHeader;
