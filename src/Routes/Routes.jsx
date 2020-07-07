import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../Components/LandingPage/LandingPage";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import CardCarousel from "../Components/CardCarousel/CardCarousel";

import topics from "../data/topics";

import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <Dashboard path="dashboard" />
        <CardCarousel path="card-carousel"/> 
        <TopicOverviewContainer path="topic-overview" topics={topics[0]} />
        <ToolPage path="tools" />
        <TopicPage path="topics" />   
      </Router>
    );
  }
}

export default Routes;
