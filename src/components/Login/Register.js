import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import "../../scss/Login.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Podaj prawidłowy email.";
    }

    if (password.length < 6) {
      newErrors.password = "Hasło musi mieć co najmniej 6 znaków.";
    }
    if (password !== password2) {
      newErrors.password = "Hasła muszą być identyczne.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        // Logika logowania (na razie nie potrzebna)
      } catch (error) {
        console.error("Error logging in with email and password", error);
      }
    }
  };

  return (
    <section id="login">
      <LoginHeader />
      <div className="login">
        <div className="login-container">
          <h1>Zaloguj się</h1>
          <div className="main-decoration"></div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-inputs">
              <div className="login-input">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {<p className="error">{errors.email}</p>}
              <div className="login-input">
                <label>Hasło</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="login-input">
                <label>Powtórz hasło</label>
                <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
              </div>
              {<p className="error">{errors.password}</p>}
            </div>
            <div className="login-buttons">
              <Link to="/login" className="login-btn">
                Zaloguj się
              </Link>
              <button type="submit" className="login-btn">
                Załóż konto
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
