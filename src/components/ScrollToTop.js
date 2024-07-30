import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../scss/ScrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funkcja pokazująca lub ukrywająca strzałkę w zależności od pozycji scrolla
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <ScrollLink to="home-header" smooth={true} duration={500} className="scroll-to-top-button">
          <span className="scroll-to-top-span">&#8735;</span>
        </ScrollLink>
      )}
    </div>
  );
};

export default ScrollToTop;
