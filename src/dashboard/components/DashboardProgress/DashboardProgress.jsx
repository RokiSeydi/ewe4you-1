import React, { Component } from "react";
import styles from "./DashboardProgress.module.scss";

class DashboardProgress extends Component {

  getTopics = (topic) => (
    <li>{topic}</li>  
  );

  render() {
    const {
      strProgress,
      strPercentage,
      arrayTopics
    } = this.props.dashboardProgress;


    return (
    <>
    <ul>
      {arrayTopics.map(this.getTopics)}
    </ul>
    </>
    );
  }
}

export default DashboardProgress;
