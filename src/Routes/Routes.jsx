import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../Components/LandingPage/LandingPage"
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard"

class Routes extends Component {
  render() {
    
    return (
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
      </Router>
    );
  }
}

export default Routes;
