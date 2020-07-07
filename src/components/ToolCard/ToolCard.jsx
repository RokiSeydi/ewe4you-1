import React, { Component } from 'react';
import styles from "./ToolCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class ToolCard extends Component {
  contentLimit = (summary) => 
    summary.length <500
    ? summary
    : summary.substring(0,400) + "...";
  render() { 
    const {
      title,
      text,
      origin,
      innerColour,
      outerColour,
    } = this.props.tool;

    const innerStyle = {
      backgroundColor: innerColour
    };
    const outerStyle = {
      backgroundColor: outerColour
    };
    return ( 
      
        <section className={styles.Topics} style={outerStyle}>
            <div className={styles.heading}>
            <h2>{title}</h2>
            </div>
            <div className={styles.inner} style={innerStyle}>
              <p></p>
            </div>
              <div className={styles.playsection}>
              <p>{text}</p>
                <span>
                <FontAwesomeIcon icon="play-circle"/>
                </span>
                <span>
                <FontAwesomeIcon icon={['fab', 'play-circle']} />
                </span>
                <p>{origin}</p>
              </div>
        </section>

     );
  }
}
 
export default ToolCard;