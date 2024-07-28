import React, { useState } from "react";
import "../../scss/HomeContact.scss";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim() || !/^[a-zA-Z]+$/.test(name)) {
      newErrors.name = "Podaj prawidłowe imię.";
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      newErrors.email = "Podaj prawidłowy email.";
    if (message.trim().length < 120) newErrors.message = "Wiadomość musi mieć co najmniej 120 znaków.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setStatus(null);

    try {
      const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors || {});
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <section id="home-contact" className="home-contact">
      <div className="home-contact-img"></div>
      <div className="home-contact-form">
        <h1>Skontaktuj się z nami</h1>
        <div className="main-decoration"></div>
        <form className="contact-form-data" onSubmit={handleSubmit}>
          <div className="form-datas">
            <div className="form-data name">
              <label className="name-label">Wpisz swoje imię</label>
              <input className="name-input" placeholder="Krzysztof" value={name} onChange={(e) => setName(e.target.value)} />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-data email">
              <label className="email-label">Wpisz swój email</label>
              <input className="email-input" placeholder="abc@xyz.pl" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className="form-data message">
            <label className="message-label">Wpisz swoją wiadomość</label>
            <textarea
              className="message-input"
              placeholder="Lorem ipsum dolor sit amet..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="form-data-btn">
            Wyślij
          </button>
          {status === "success" && <p className="success">Wiadomość została wysłana!</p>}
        </form>
      </div>
      <div className="home-contact-footer">
        <div className="contact-footer-socialmedia"></div>
        <p className="contact-footer-copyright">Copyright by Coders Lab</p>
        <div className="contact-footer-socialmedia">
          <div className="footer-socialmedia-facebook"></div>
          <div className="footer-socialmedia-insta"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
