import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';
import { Link } from '@reach/router'
import picture from "../../assets/stress.png"

class TopicOverview extends Component {
  render() {
    const {
      title,
      text,
      innerColour, 
      outerColour
    } = this.props.topic;

    const innerStyle = {
      backgroundColor: innerColour
    };
    const outerStyle = {
      backgroundColor: outerColour
    };

    return (
      <>
        <div className ={styles.container}>
          <div className={styles.outer}  style={outerStyle}>
                <h1>{title}</h1>  
            <div className={styles.inner} style={innerStyle}>
              <div className={styles.img}>
                <img src={picture} alt={title}/>
              </div>
              <div className={styles.text}>
                <p>{text}</p>
              </div>
              <div className={styles.links}>
                <Link to="">
                  Start Topic
                </Link>
                <Link to="/topics">
                  Go Back
                </Link>
                <Link to="/wellbean">
                  Wellbean Activity
                </Link>
                <Link to="/topic-conclusion">
                  Topic Conclusion
                </Link>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </>
    );
  }
}

export default TopicOverview;

