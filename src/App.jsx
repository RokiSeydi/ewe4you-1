import React, { Component } from 'react';
import LandingPage from "./Components/LandingPage";
import TopicOverview from "./Components/TopicOverview";
import DashboardUpdate from "./Components/Dashboard/DashboardUpdate";
import DashboardProgress from "./Components/Dashboard/DashboardProgress";
import styles from './App.module.scss';
import topics from "./data/topics"
import Routes from "./Routes/Routes";

class App extends Component {
  
  render() {
    return (
      <>
        <LandingPage/>
        <div className={styles.backgroundDiv}>
          <h1>Hi there! Welcome to your dashboard view</h1>
          <div className={styles.dashboardView}>
            <section className={styles.updateSection}>
              <DashboardUpdate strTitle="Test Title 1" strText="this is the test text for the component" />
              <DashboardUpdate strTitle="Test Title 2" strText="this is the test text for the component" />
              <DashboardUpdate strTitle="Test Title 3" strText="this is the test text for the component" />
            </section>
            <section className={styles.progressSection}>
              <DashboardProgress strProgress="Progress" strPercentage="100%" />
            </section>
          </div>
        </div>
        <section className={styles.topicOverview}>
          <TopicOverview topics= {topics[0]}/>
          </section>
        <section className={styles.content}>
          <Routes />
        </section>
      </>
    );
  }
}

export default App;
      

