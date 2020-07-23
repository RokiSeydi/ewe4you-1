import React, { Component } from "react";
import styles from "./DashboardProgress.module.scss";
import ProgressBar from "../../../components/ProgressBar"

class DashboardProgress extends Component {

  render() {
    
    return (

      <div className={styles.progress}>
        <h3>{this.props.strProgress}</h3>
        <p>{this.props.strPercentage}</p>

        <ul>
          <div className={styles.progressLine}><p>Stress</p><div className={styles.progressDiv}><ProgressBar percentage={60}/></div></div>
          <div className={styles.progressLine}><p>Emotions</p><div className={styles.progressDiv}><ProgressBar percentage={20}/></div></div>
          <div className={styles.progressLine}><p>Body-Image</p><div className={styles.progressDiv}><ProgressBar percentage={30}/></div></div>
          <div className={styles.progressLine}><p>Self-Esteem</p><div className={styles.progressDiv}><ProgressBar percentage={70}/></div></div>
          <div className={styles.progressLine}><p>Healthy Relationships</p><div className={styles.progressDiv}><ProgressBar percentage={10}/></div></div>
          <div className={styles.progressLine}><p>The Relationship between food and mood</p><div className={styles.progressDiv}><ProgressBar percentage={80}/></div></div>
          <div className={styles.progressLine}><p>The Relationship between sleep and mood</p><div className={styles.progressDiv}><ProgressBar percentage={6}/></div></div>
          <div className={styles.progressLine}><p>The Relationship between exercise and mood</p><div className={styles.progressDiv}><ProgressBar percentage={30}/></div></div>
          <div className={styles.progressLine}><p>Empathy and Communication</p><div className={styles.progressDiv}><ProgressBar percentage={90}/></div></div>
          <div className={styles.progressLine}><p>Technology and the Internet</p><div className={styles.progressDiv}><ProgressBar percentage={50}/></div></div>
          <div className={styles.progressLine}><p>Gender</p><div className={styles.progressDiv}><ProgressBar percentage={15}/></div></div>
          <div className={styles.progressLine}><p>Identity</p><div className={styles.progressDiv}><ProgressBar percentage={75}/></div></div>
        </ul>
    </div>

    );
  }
}

export default DashboardProgress;
