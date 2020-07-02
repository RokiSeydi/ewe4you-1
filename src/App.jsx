import React, { Component } from 'react';

import styles from "./App.module.scss";
//import TopicCard from "./Components/TopicCard";//
import image from "./img/ewe4you.jpg";
import CardCarousel from "./Components/CardCarousel"
import ToolCard from "./Components/ToolCard"

import LandingPage from "./Components/LandingPage";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import DashboardUpdate from './dashboard/components/DashboardUpdate';
import DashboardProgress from './dashboard/components/DashboardProgress';
library.add(fab, faPlayCircle)

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
        
           <div className={styles.Flexed} >
             <CardCarousel cardType={'topics'}/>
           </div>
      
      <div className={styles.Flexed} >
       <CardCarousel cardType={'tools'}/>
        </div>
     
    
  </>    
    )
  }
}

export default App;
      

