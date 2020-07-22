import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';
import Button from '../../components/Button/Button';
import { Link } from '@reach/router';

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
              <div>
                <img src={image} alt={title}/>
              </div>
              <div>
                <p>{text}</p>
                  <Link to="">
                    <Button text={'start topic'}/>
                  </Link>
                  <Link to="/topics">
                    <Button text={'Go Back'}/>
                  </Link>
                  <Link to="/wellbean">
                    <Button text={'Wellbean Activity'}/>
                  </Link>
                  <Link to="/topic-conclusion">
                    <Button text={'Topic Conclusion'}/>
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

