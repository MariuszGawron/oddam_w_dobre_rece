import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../scss/HomeHeader.scss";
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
              <ScrollLink to="main-buttons" smooth={true} duration={500} className="btn">
                Start
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="main-four-steps" smooth={true} duration={500} className="btn">
                O co chodzi?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="home-aboutus" smooth={true} duration={500} className="btn">
                O nas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="home-whohelp" smooth={true} duration={500} className="btn">
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="home-contact" smooth={true} duration={500} className="btn">
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <HomeMainButtons />
      </div>
    </header>
  );
};

export default HomeHeader;
