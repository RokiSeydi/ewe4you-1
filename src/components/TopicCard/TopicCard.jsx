import React, { Component } from 'react';
import styles from "./TopicCard.module.scss";
class TopicCard extends Component {
  contentLimit = (summary) => 
    summary.length <500
    ? summary
    : summary.substring(0,400) + "...";
  render() { 
    const {
      title,
      text,
      innerColour,
      outerColour,
    } = this.props.topic;

    const innerStyle = {
      backgroundColor: innerColour
    };
    const outerStyle = {
      backgroundColor: outerColour
    };
    return ( 
        <section className={styles.Topics} style={outerStyle}>
            <div >
            <h2>{title}</h2>
            </div>
            <div style={innerStyle} className={styles.inner}>
              <p>
                {this.contentLimit(text)}
              </p>
            </div>
        </section>
     );
  }
}
export default TopicCard;
