import React, { Component } from 'react';
import styles from "./ToolCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faComments, faWrench, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faTachometerAlt, faComments, faWrench, faUser, fab, faPlayCircle)

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
                <div className={styles.button}>
                <FontAwesomeIcon icon="play-circle"/>
                <FontAwesomeIcon icon={['fab', 'play-circle']} />
                </div>
                <p>Unlocked from weight loss topic</p>
              </div>
        </section>

     );
  }
}
 
export default ToolCard;