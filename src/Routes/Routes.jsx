import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../components/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import MyAccount from "../components/MyAccount";
import tools from "../data/tools";

import PositiveAffirmations from "../components/PositiveAffirmations";
import StressGraph from "../components/StressGraph";
import Gallery from "../containers/Gallery";
import TopicOverviewContainer from "../containers/TopicOverviewContainer";
import ToolOverviewContainer from "../containers/ToolOverviewContainer";
import TopicConclusionContainer from "../containers/TopicConclusionContainer";
import WellBeanContainer from "../containers/WellBeanContainer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


class Routes extends Component {
  render() {
    return (
       <Router>
        <LandingPage path="/" user={this.props.user}
          signIn={this.props.signIn}
          signOut={this.props.signOut} />
          <PrivateRoutes user={this.props.user} path="/" signOut={this.props.signOut}>
            <DashboardPage path="dashboard" user={this.props.user}/>
            <TopicOverviewContainer path="topic-overview"/>
            <ToolOverviewContainer path="affirmations-overview" tool={tools[0]} />
            <ToolOverviewContainer path="selfie-overview" tool={tools[1]} />
            <ToolPage path="tools"/>
            <TopicPage path="topics"/>
            <PositiveAffirmations path="positive-affirmations" user={this.props.user}/>
            <TopicPage path="topics"/>
            <MyAccount path="myaccount"/>
            <TopicConclusionContainer path="topic-conclusion"/>
            <WellBeanContainer path="wellbean" user={this.props.user}/>
            <StressGraph path="stress-graph" />
            <Gallery path="gallery" user={this.props.user}/>
          </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;
