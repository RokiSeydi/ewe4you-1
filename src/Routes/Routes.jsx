import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../Components/LandingPage/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import CardCarousel from "../Components/CardCarousel/CardCarousel";
import TopicOverview from "../Components/TopicOverview/TopicOverview";
import topics from "../data/topics";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";


class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboardPage" />
        <CardCarousel path="card-carousel"/> 
        <TopicOverview path="topic-overview" topics={topics[0]} />
        <ToolPage path="tools" />
        <TopicPage path="topics" />   
      
      </Router>
    );
  }
}

export default Routes;
