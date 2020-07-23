import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../components/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import MyAccount from "../components/MyAccount";

import PositiveAffirmations from "../components/PositiveAffirmations";
import Gallery from "../containers/Gallery";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
import ToolOverviewContainer from "../containers/ToolOverviewContainer";
import TopicConclusionContainter from "../containers/TopicConclusionContainter";
import WellBeanContainer from "../containers/WellBeanContainer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" user={this.props.user}
          signIn={this.props.signIn}
          signOut={this.props.signOut} />
          <PrivateRoutes path="/" signOut={this.props.signOut}> 
            <DashboardPage path="dashboard" user={this.props.user}/>
            <TopicOverviewContainer path="topic-overview"/>
            <ToolOverviewContainer path="tool-overview"/>
            <ToolPage path="tools"/>
            <TopicPage path="topics"/>
            <PositiveAffirmations path="PositiveAffirmations" user={this.props.user}/>
            <TopicPage path="topics"/>
            <MyAccount path="myaccount"/>
            <TopicConclusionContainter path="topic-conclusion"/>
            <WellBeanContainer path="wellbean" user={this.props.user}/>
            <Gallery path="gallery"/>
          </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;
