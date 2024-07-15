import React from "react";
import { Link } from "react-router-dom";
import "../../scss/HomeMainButtons.scss";

const HomeMainButtons = () => {
  return (
    <section className="home-main-buttons">
      <h1>
        Zacznij pomagać!
        <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <div className="buttons-container">
        <Link to="/login" className="main-button">
          Oddaj rzeczy
        </Link>
        <Link to="/login" className="main-button">
          Zorganizuj zbiórkę
        </Link>
      </div>
    </section>
  );
};

export default HomeMainButtons;
