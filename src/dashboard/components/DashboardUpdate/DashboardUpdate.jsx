import React, { Component } from "react";
import styles from "./DashboardUpdate.module.scss";

class DashboardUpdate extends Component {
  render() {


    return (
      <div className={styles.mainDiv}>
        <div>
          <h3>{this.props.strTitle}</h3>
          <p>{this.props.strText}</p>
        </div>
        <div>
          {/* graph section */}
        </div>
      </div>
    );
  }
}

export default DashboardUpdate;
