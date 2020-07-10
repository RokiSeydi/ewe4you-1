import React, { Component } from 'react';
import TopicOverview from "../../Components/TopicOverview";
import styles from "./TopicOverviewContainer.module.scss";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

import topics from "../../data/topics";


class TopicOverviewContainer extends Component {

  render() { 
    return ( 
      <>
        <NavigationBar/>
          <div className={styles.Flexed} >
            <TopicOverview topic={topics[0]}/>
          </div>
      </>
     )
  }
}
export default TopicOverviewContainer;
















































