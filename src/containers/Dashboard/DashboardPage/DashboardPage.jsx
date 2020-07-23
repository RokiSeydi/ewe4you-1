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
              <DashboardUpdate strTitle="Your feedback matters" strText="We really value your feedback, this helps us improve the quality of our app." strUrl = "https://www.surveymonkey.co.uk"/>
              <DashboardUpdate strTitle="New tool unlocked!" strText="Congratulations!  Open your toolbox to discover your new tool!"/>
              <DashboardUpdate strTitle="A new topic has been added!" strText="Check out your Topic Page to uncover a recently added topic!" />
            </section>
            <section className={styles.progressSection}>
              <DashboardProgress strProgress="Progress" strPercentage="Check out your progress on your topics below" />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default DashboardPage;
