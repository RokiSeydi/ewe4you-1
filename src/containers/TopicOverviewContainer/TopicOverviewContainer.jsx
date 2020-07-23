import React, { Component } from "react";
import TopicOverview from "../../components/TopicOverview";
import styles from "./TopicOverviewContainer.module.scss";
import topics from "../../data/topics";

class TopicOverviewContainer extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
          <TopicOverview topic={topics[0]} />
        </div>
      </>
    );
  }
}
export default TopicOverviewContainer;
