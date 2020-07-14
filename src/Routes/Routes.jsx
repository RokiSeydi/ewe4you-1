import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../components/LandingPage";

import DashboardPage from "../containers/dashboard/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import MyAccount from "../components/MyAccount";

import PositiveAffirmations from "../components/PositiveAffirmations";
import Gallery from "../containers/Gallery";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
import TopicConclusionContainter from "../containers/TopicConclusionContainter";
import StressGraph from "../Components/StressGraph/StressGraph";

class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview" />
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <PositiveAffirmations path="PositiveAffirmations" />
        <TopicPage path="topics" />
        <MyAccount path="myaccount" />
        <TopicConclusionContainter path="topic-conclusion" />
        <Gallery path="gallery" />
        <StressGraph path="stress-graph" />
      </Router>
    );
  }
}

export default Routes;
