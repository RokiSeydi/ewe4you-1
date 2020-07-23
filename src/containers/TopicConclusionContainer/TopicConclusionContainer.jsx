import React, { Component } from "react";
import TopicConclusion from "../../components/TopicConclusion";
import styles from "./TopicConclusionContainer.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";

import topics from "../../data/topics";

class TopicConclusionContainer extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className={styles.Flexed}>
          <TopicConclusion topic={topics[1]} />
        </div>
      </>
    );
  }
}
export default TopicConclusionContainer;
