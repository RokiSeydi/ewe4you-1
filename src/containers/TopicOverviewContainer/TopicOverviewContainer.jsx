import React, { Component } from "react";
import TopicOverview from "../../components/TopicOverview";
import styles from "./TopicOverviewContainer.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";

import topics from "../../data/topics";

class TopicOverviewContainer extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className={styles.Flexed}>
          <TopicOverview topic={topics[0]} />
        </div>
      </>
    );
  }
}
export default TopicOverviewContainer;
