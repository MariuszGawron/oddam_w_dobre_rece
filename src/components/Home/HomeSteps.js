import React from "react";
import { Link } from "react-router-dom";
import "../../scss/HomeMainButtons.scss";
import "../../scss/HomeSteps.scss";

const HomeSteps = () => {
  return (
    <section id="main-four-steps" className="main-four-steps">
      <h1>Wystarczą 4 proste kroki</h1>
      <div className="main-decoration"></div>
      <div className="four-steps">
        <div className="step-column">
          <div className="img img1"></div>
          <p className="img-title">Wybierz rzeczy</p>
          <p className="img-text">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="step-column">
          <div className="img img2"></div>
          <p className="img-title">Spakuj je</p>
          <p className="img-text">skorzystaj z worków na śmieci</p>
        </div>
        <div className="step-column">
          <div className="img img3"></div>
          <p className="img-title">Zdecyduj komu chcesz pomóc</p>
          <p className="img-text">wybierz zaufane miejsce</p>
        </div>
        <div className="step-column">
          <div className="img img4"></div>
          <p className="img-title">Zamów kuriera</p>
          <p className="img-text">kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <div className="buttons-container">
        <ul className="buttons-container-links">
          <li>
            <Link to="/login" className="container-links-button">
              ODDAJ<br></br>RZECZY
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSteps;
