import React, { Component } from 'react';
import library from './data/fa-library';

import styles from "./App.module.scss";
//import TopicCard from "./Components/TopicCard";//
import image from "./img/ewe4you.jpg";
import CardCarousel from "./Components/CardCarousel"

import LandingPage from "./Components/LandingPage";
import NavigationBar from "./Components/NavigationBar";



import DashboardUpdate from './dashboard/components/DashboardUpdate';
import DashboardProgress from './dashboard/components/DashboardProgress';

class App extends Component {
  render() {
    return (
  
    <React.Fragment >

      <section>
        <NavigationBar />
      </section>
      
      <div className={styles.Flexed} >
        <CardCarousel />
      </div>
    {/* {image} */}
   
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

    </React.Fragment>
    
      
    )
  }
}

export default App;
      

