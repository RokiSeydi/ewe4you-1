import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../components/LandingPage/LandingPage";

import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
<<<<<<< HEAD
import Gallery from "../containers/Gallery";
=======
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
>>>>>>> 3b8e004057f97de81838dc6ea634ae489ea346ba

class Routes extends Component {
  render() {
  
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview"/>
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <Gallery path="gallery" />
      </Router>
    );
  }
}

export default Routes;
