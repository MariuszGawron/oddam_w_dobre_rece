import React from "react";
import HomeHeader from "./HomeHeader";
import "../../scss/Home.scss";

const Home = () => {
  return (
    <div className="home-main">
      <HomeHeader />
      {/* Dodaj inne komponenty sekcji/grup w razie potrzeby */}
    </div>
  );
};

export default Home;
