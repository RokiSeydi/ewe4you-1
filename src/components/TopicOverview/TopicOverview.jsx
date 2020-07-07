import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';
import NavigationBar from "../NavigationBar/NavigationBar";

class TopicOverview extends Component {
  render() {
    const {
      title,
      image,
      text,
    } = this.props.topic;

    return (
      <>
        <NavigationBar/>
        <div className={styles.outer}>
              <h1>{title}</h1>  
          <div className={styles.inner}>
            <div>
              <img src={image} alt={title}/>
            </div>
            <div>
              <p>{text}</p>
              <button>Start Topic</button>
              <button>Go Back</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopicOverview;

