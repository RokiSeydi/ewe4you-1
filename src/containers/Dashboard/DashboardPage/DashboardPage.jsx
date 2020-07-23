import React, { Component } from "react";
import styles from "./DashboardPage.module.scss";

import DashboardUpdate from "../DashboardUpdate";
import DashboardProgress from "../DashboardProgress";
import firebase from "../../../firebase";

class DashboardPage extends Component {
state = {
  user: this.props.user
}

componentDidMount() {
  this.setState({
    user: firebase.auth().currentUser
  });
}
  render() {

    return (
      <>
      {/* {console.log(firebase.auth().currentUser?.displayName)} */}
        {/* <NavigationBar signOut={this.props.signOut} /> */}
        <div className={styles.backgroundDiv}>
          <h1>{`Hi ${this.props.user?.displayName}! Welcome to your dashboard view`}</h1>
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
