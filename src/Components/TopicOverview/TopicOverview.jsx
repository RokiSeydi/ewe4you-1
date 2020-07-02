import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';

class TopicOverview extends Component {
  render() {
    const {
      title,
      image,
      text,
      startUrl,
      backUrl,
    } = this.props.topics;

    return (
      <>
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

