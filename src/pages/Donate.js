import React from "react";
import { Routes, Route } from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Summary from "../components/Summary";
import ThankYou from "../components/ThankYou";

const Donate = () => {
  return (
    <Routes>
      <Route path="/oddaj-rzeczy/step1" component={Step1} />
      <Route path="/oddaj-rzeczy/step2" component={Step2} />
      <Route path="/oddaj-rzeczy/step3" component={Step3} />
      <Route path="/oddaj-rzeczy/step4" component={Step4} />
      <Route path="/oddaj-rzeczy/summary" component={Summary} />
      <Route path="/oddaj-rzeczy/thankyou" component={ThankYou} />
    </Routes>
  );
};

export default Donate;
