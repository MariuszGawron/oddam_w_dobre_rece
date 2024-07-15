import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeMainButtons from "./HomeMainButtons";
import "../../scss/Home.scss";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeMainButtons />
      {/* Dodaj inne komponenty sekcji/grup w razie potrzeby */}
    </div>
  );
};

export default Home;
