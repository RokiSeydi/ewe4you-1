import React, { Component } from "react";
import TopicConclusion from "../../components/TopicConclusion";
import styles from "./TopicConclusionContainter.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";

import topics from "../../data/topics";

class TopicConclusionContainter extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className={styles.Flexed}>
          <TopicConclusion topic={topics[0]} />
        </div>
      </>
    );
  }
}
export default TopicConclusionContainter;
