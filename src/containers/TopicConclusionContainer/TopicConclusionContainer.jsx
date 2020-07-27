import React, { Component } from "react";
import TopicConclusion from "../../components/TopicConclusion";
import styles from "./TopicConclusionContainer.module.scss";

import topics from "../../data/topics";

class TopicConclusionContainer extends Component {
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
export default TopicConclusionContainer;
