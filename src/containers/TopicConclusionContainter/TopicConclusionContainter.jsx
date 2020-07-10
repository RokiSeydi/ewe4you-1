import React, { Component } from 'react';
import TopicConclusion from "../../Components/TopicConclusion";
import styles from "./TopicConclusionContainter.module.scss";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

import topics from "../../data/topics";


class TopicConclusionContainter extends Component {

  render() { 
    return ( 
      <>
        <NavigationBar/>
          <div className={styles.Flexed} >
            <TopicConclusion topic={topics[0]}/>
          </div>
      </>
     )
  }
}
export default TopicConclusionContainter;
















































