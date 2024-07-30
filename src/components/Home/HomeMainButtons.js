import React from "react";
import { Link } from "react-router-dom";
import "../../scss/HomeMainButtons.scss";

const HomeMainButtons = () => {
  return (
    <section id="main-buttons" className="main-buttons">
      <h1>
        Zacznij pomagać!
        <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="main-decoration"></div>
      <div className="buttons-container">
        <ul className="buttons-container-links">
          <li>
            <Link to="/login" className="container-links-button">
              ODDAJ<br></br>RZECZY
            </Link>
          </li>
          <li>
            <Link to="/login" className="container-links-button">
              ZORGANIZUJ<br></br>ZBIÓRKĘ
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeMainButtons;
