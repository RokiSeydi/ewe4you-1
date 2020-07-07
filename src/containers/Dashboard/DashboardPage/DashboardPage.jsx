import React, { Component } from "react";
import styles from "./DashboardPage.module.scss";

import DashboardUpdate from "../DashboardUpdate/DashboardUpdate"
import DashboardProgress from "../DashboardProgress/DashboardProgress"
import NavigationBar from "../../../components/NavigationBar/NavigationBar"

class DashboardPage extends Component {

  render() {
    
    return (
      <>
      <NavigationBar/>
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
      </>
    );
  }
}

export default DashboardPage;
