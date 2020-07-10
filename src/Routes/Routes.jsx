import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../Components/LandingPage/LandingPage";

import TopicOverviewContainer from "../Components/TopicOverview/TopicOverview";
import DashboardPage from "../containers/dashboard/DashboardPage/DashboardPage";
import ToolPage from "../containers/ToolPage/ToolPage";
import TopicPage from "../containers/TopicPage/TopicPage";
import MyAccount from "../Components/MyAccount/MyAccount";

import PositiveAffirmations from "../Components/PositiveAffirmations/PositiveAffirmations";
import Gallery from "../containers/Gallery";


class Routes extends Component {
  render() {
  
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview"/>
        <ToolPage path="tools" />
        <TopicPage path="topics" /> 
        <PositiveAffirmations path="PositiveAffirmations" />  
        <TopicPage path="topics" />
        <MyAccount path="myaccount" />
        <Gallery path="gallery" />
      </Router>
    );
  }
}

export default Routes;
