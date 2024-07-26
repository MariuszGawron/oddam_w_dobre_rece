import React from "react";
import "../../scss/HomeContact.scss";

const HomeContact = () => {
  return (
    <section id="home-contact" className="home-contact">
      <div className="home-contact-img"></div>
      <div className="home-contact-form">
        <h1>Skontaktuj się z nami</h1>
        <div className="main-decoration"></div>
        <form className="contact-form-data">
          <div className="form-datas">
            <div className="form-data name">
              <label className="name-label">Wpisz swoje imię</label>
              <input className="name-input" placeholder="Krzysztof"></input>
            </div>
            <div className="form-data email">
              <label className="email-label">Wpisz swój email</label>
              <input className="email-input" placeholder="abc@xyz.pl"></input>
            </div>
          </div>
          <div className="form-data message">
            <label className="message-label">Wpisz swoją wiadomość</label>
            <textarea
              className="message-input"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
