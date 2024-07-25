// src/components/Home/HomeThreeColumns.js
import React from "react";
import "../../scss/HomeThreeColumns.scss";

const HomeThreeColumns = () => {
  return (
    <section id="main-three-columns" className="main-three-columns">
      <div className="column">
        <p className="number">10</p>
        <p className="title">ODDANYCH WORKÓW</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
      </div>
      <div className="column">
        <p className="number">5</p>
        <p className="title">WSPARTYCH ORGANIZACJI</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
      </div>
      <div className="column">
        <p className="number">7</p>
        <p className="title">ZORGANIZOWANY ZBIÓREK</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
      </div>
    </section>
  );
};

export default HomeThreeColumns;
