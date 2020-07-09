import React, { Component } from "react";
import { Router } from "@reach/router";

import LandingPage from "../components/LandingPage/LandingPage";

import TopicOverviewContainer from "../Components/TopicOverview/TopicOverview";
import DashboardPage from "../containers/Dashboard/DashboardPage/dashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import MyAccount from "../Components/MyAccount/MyAccount";


class Routes extends Component {
  render() {
  
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboard" />
        <TopicOverviewContainer path="topic-overview"/>
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <MyAccount path="myaccount" />   
      
      </Router>
    );
  }
}

export default Routes;
