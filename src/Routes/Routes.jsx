import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../components/LandingPage/LandingPage";

import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
import TopicConclusionContainter from "../containers/TopicConclusionContainter";

class Routes extends Component {
  render() {
  
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview"/>
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <TopicConclusionContainter path="topic-conclusion"/>
      </Router>
    );
  }
}

export default Routes;
