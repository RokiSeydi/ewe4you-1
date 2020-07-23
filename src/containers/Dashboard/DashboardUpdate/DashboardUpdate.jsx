import React, { Component } from "react";
import styles from "./DashboardUpdate.module.scss";

class DashboardUpdate extends Component {
  render() {

    return (
      <div className={styles.mainDiv}>
        <div className={styles.text}>
          <h3>{this.props.strTitle}</h3>
          <p>{this.props.strText}</p>
          {this.props.strUrl ? <a href={this.props.strUrl} rel="noopener noreferrer" target="_blank">Please Click Here to complete our short survey</a>: null }
        </div>
      </div>
    );
  }
}

export default DashboardUpdate;
