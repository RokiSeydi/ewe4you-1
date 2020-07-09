import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';
import { Link } from '@reach/router'
import WellBean from '../WellBean/WellBean'

class TopicOverview extends Component {
  render() {
    const {
      title,
      image,
      text,
    } = this.props.topic;

    return (
      <>
        <div className ={styles.container}>
          <div className={styles.outer}>
                <h1>{title}</h1>  
            <div className={styles.inner}>
              <WellBean />
              {/* <div>
                <img src={image} alt={title}/>
              </div> */}
                  <div>
                    {/* <p>{text}</p> */}
                      <Link to="">
                        Start Topic
                      </Link>
                      <Link to="/topics">
                        Go Back
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

