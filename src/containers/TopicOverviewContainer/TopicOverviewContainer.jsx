import React, { Component } from 'react';
import TopicOverview from "../../components/TopicOverview"
import styles from "./TopicOverviewContainer.module.scss"
import NavigationBar from "../../components/NavigationBar"
import topics from "../../data/topics";


class TopicOverviewContainer extends Component {

  render() { 
    return ( 
      <>
        <NavigationBar/>
          <div className={styles.Flexed} >
            <TopicOverview path="topic-overview" topic={topics[1]} />
          </div>
      </>
     )
  }
}
export default TopicOverviewContainer;
















































