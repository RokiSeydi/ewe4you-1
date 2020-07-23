import React, { Component } from 'react';
import styles from './TopicOverview.module.scss';
import Button from '../../components/Button/Button';
import { Link } from '@reach/router';
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
              <div className={styles.img}>
                <img src={picture} alt={title}/>
              </div>
              <div className={styles.text}>
                <p>{text}</p>
              </div>
              <div className={styles.buttons}>
                  <Link to="">
                    <Button text={'Start Topic'}/>
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

