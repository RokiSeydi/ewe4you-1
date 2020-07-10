import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../components/LandingPage/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import Gallery from "../containers/Gallery";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
import ToolOverview from "../components/ToolOverview";
import ToolOverviewContainer from "../containers/ToolOverviewContainer";

class Routes extends Component {
  render() {
  
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview"/>
        <ToolOverviewContainer path="tool-overview"/>
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <Gallery path="gallery" />
      </Router>
    );
  }
}

export default Routes;
