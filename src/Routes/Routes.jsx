import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../Components/LandingPage/LandingPage";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import CardCarousel from "../Components/CardCarousel/CardCarousel";
import TopicOverview from "../Components/TopicOverview/TopicOverview";
import topics from "../data/topics";

class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
        <CardCarousel path="card-carousel"/> 
        <TopicOverview path="topic-overview" topics={topics[0]} />
      </Router>
    );
  }
}

export default Routes;
