import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';

import picture from "../../assets/stress.png"

class TopicOverview extends Component {
  render() {
    const {
      title,
      text,
    } = this.props.topic;

    return (
      <>
        <div className ={styles.container}>
          <div className={styles.outer}>
                <h1>{title}</h1>  
            <div className={styles.inner}>
              <div>
                <img src={picture} alt={title}/>
              </div>
              <div>
                <p>{text}</p>
                  <Link to="">
                    Start Topic
                  </Link>
                  <Link to="/topics">
                    Go Back
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

