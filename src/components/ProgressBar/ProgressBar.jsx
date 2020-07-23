import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";


class ProgressBar extends Component {
    
      
      render() {
        const progress = this.props.percentage;
        return (

            <div className={styles.container}>
              <div className={styles.complete} style={{width: `${progress}%`}}>
                <div className={styles.liquid}></div>
              </div>
              <span className={styles.progress}>{progress}%</span>
            </div>
        )
      }
}
 
export default ProgressBar;