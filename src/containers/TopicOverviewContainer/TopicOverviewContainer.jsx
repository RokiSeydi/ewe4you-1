import React, { Component } from 'react';
import TopicOverview from "../../Components/TopicOverview"
import styles from "./TopicOverviewContainer.module.scss"
import NavigationBar from "../../Components/NavigationBar/NavigationBar"

class TopicOverviewContainer extends Component {


  render() { 

    return ( 
      <>
        <NavigationBar/>
          <div className={styles.Flexed} >
            <TopicOverview topics={this.props.topics}/>
          </div>
      </>
     )
  }
}



export default TopicOverviewContainer;

















































