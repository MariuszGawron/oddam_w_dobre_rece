import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoHelp from "./HomeWhoHelp";
import HomeContact from "./HomeContact";

import "../../scss/Home.scss";

const Home = () => {
  return (
    <div className="home-main">
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSteps id="main-four-steps" />
      <HomeAboutUs />
      <HomeWhoHelp />
      <HomeContact />
    </div>
  );
};

export default Home;
