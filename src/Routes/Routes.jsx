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
            <DashboardPage path="dashboard" signOut={this.props.signOut}/>
            <TopicOverviewContainer path="topic-overview" signOut={this.props.signOut}/>
            <ToolPage path="tools" signOut={this.props.signOut}/>
            <TopicPage path="topics" signOut={this.props.signOut}/>
            <PositiveAffirmations path="PositiveAffirmations" signOut={this.props.signOut}/>
            <TopicPage path="topics" signOut={this.props.signOut}/>
            <MyAccount path="myaccount" signOut={this.props.signOut}/>
            <TopicConclusionContainter path="topic-conclusion" signOut={this.props.signOut}/>
            <WellBeanContainer path="wellbean" signOut={this.props.signOut}/>
            <Gallery path="gallery" signOut={this.props.signOut}/>
          </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;
