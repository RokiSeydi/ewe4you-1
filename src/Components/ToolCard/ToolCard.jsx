import React, { Component } from 'react';
import styles from "./ToolCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ToolCard extends Component {
  contentLimit = (summary) => 
    summary.length <500
    ? summary
    : summary.substring(0,400) + "...";
  render() { 
    return ( 
      
        <section className={styles.Topics}>
            <div className={styles.heading}>
            <h2>Slow breathing</h2>
            </div>
            <div className={styles.inner}>
              <p></p>
            </div>
              <div className={styles.playsection}>
                <p>Exercise to breath deeply for 60 seconds</p>
                <span>
                <FontAwesomeIcon icon="play-circle" />
                </span>
                <span>
                <FontAwesomeIcon icon={['fab', 'play-circle']} />
                </span>
                <p>Unlocked from weight loss topic</p>
              </div>
        </section>

     );
  }
}
 
export default ToolCard;