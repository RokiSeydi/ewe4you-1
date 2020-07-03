import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../Components/LandingPage/LandingPage";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import CardCarousel from "../Components/CardCarousel/CardCarousel"

class Routes extends Component {
  render() {
    
    return (
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
        <CardCarousel path="CardCarousel"/>
      </Router>
    );
  }
}

export default Routes;
