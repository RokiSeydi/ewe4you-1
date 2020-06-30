import React, { Component } from "react";
import styles from "./DashboardProgress.module.scss";

class DashboardProgress extends Component {

  render() {
    
    return (

      <div class={styles.progress}>
        <h3>{this.props.strProgress}</h3>
        <p>{this.props.strPercentage}</p>
        <ul>
          <p>Topic - - - - - - - 70%</p>
          <br/>
          <p>Topic - - - - - 50%</p>
          <br/>
          <p>Topic - - - - 40%</p>
        </ul>
    </div>

    );
  }
}

export default DashboardProgress;
