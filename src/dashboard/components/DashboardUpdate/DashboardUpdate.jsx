import React, { Component } from "react";
import styles from "./DashboardUpdate.module.scss";

class DashboardUpdate extends Component {
  render() {
  console.log("this is running during the test");

    return (
      <div className={styles.mainDiv}>
        <div>
          <h3>{this.props.strTitle}</h3>
          <p>{this.props.strText}</p>
        </div>
      </div>
    );
  }
}

export default DashboardUpdate;
