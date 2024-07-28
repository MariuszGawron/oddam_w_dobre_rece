import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import "../../scss/Login.scss";

const Logout = () => {
  return (
    <section id="login">
      <LoginHeader />
      <div className="login">
        <div className="login-container">
          <h1>Wylogowanie nastąpiło pomyślnie</h1>
          <div className="main-decoration"></div>
          <Link to="/" className="login-btn">
            Strona główna
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Logout;
