import React, { Component } from "react";
import { Router } from "@reach/router";
<<<<<<< HEAD
import LandingPage from "../Components/LandingPage/LandingPage";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import CardCarousel from "../Components/CardCarousel/CardCarousel";
import TopicOverview from "../Components/TopicOverview/TopicOverview";
import topics from "../data/topics";
=======

import LandingPage from "../Components/LandingPage/LandingPage"
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard"
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import CardCarousel from "../Components/CardCarousel/CardCarousel"
>>>>>>> 653741c264302d516d5013dffdce0f77c15960e5

class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
<<<<<<< HEAD
        <CardCarousel path="card-carousel"/> 
        <TopicOverview path="topic-overview" topics={topics[0]} />
=======
        <ToolPage path="tools" />
        <TopicPage path="topics" />   
        <CardCarousel path="CardCarousel"/>
>>>>>>> 653741c264302d516d5013dffdce0f77c15960e5
      </Router>
    );
  }
}

export default Routes;
