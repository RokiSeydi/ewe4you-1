import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../components/LandingPage/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import TopicOverview from "../components/TopicOverview/TopicOverview";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";


import topics from "../data/topics";

      <>
import ToolPage from "../containers/ToolPage";
        <DashboardPage path="dashboard" />
        <CardCarousel path="card-carousel"/> 
        <TopicOverviewContainer path="topic-overview" topics={topics[0]} />
        <ToolPage path="tools" />
        <TopicPage path="topics" /> 
class Routes ex
      </>tends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
  
      </Router>
    );
  }
}

export default Routes;
