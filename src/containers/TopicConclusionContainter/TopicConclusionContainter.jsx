import React, { Component } from "react";
import TopicConclusion from "../../components/TopicConclusion";
import styles from "./TopicConclusionContainter.module.scss";


import topics from "../../data/topics";

class TopicConclusionContainter extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
          <TopicConclusion topic={topics[0]} />
        </div>
      </>
    );
  }
}
export default TopicConclusionContainter;
