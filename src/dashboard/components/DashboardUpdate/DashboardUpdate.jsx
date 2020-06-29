import React, { Component } from "react";
import styles from "./DashboardUpdate.module.scss";

class DashboardUpdate extends Component {
  render() {
    const {
      id,
      strTitle,
      strText,

    } = this.props.dashboardUpdate;

    return (
      <div>
        <h3>{strTitle}</h3>
        <p>{strText}</p>
      </div>
    );
  }
}

export default DashboardUpdate;
