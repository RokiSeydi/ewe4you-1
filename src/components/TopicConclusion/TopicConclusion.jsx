import React, { Component } from 'react';
import styles from './TopicConclusion.module.scss';
import Button from '../../components/Button/Button';
import { Link } from '@reach/router';

class TopicConclusion extends Component {
    render() {
        const {
        title,
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
                <div className={styles.outer} style={outerStyle}>
                    <p></p>
                    <div className={styles.inner} style={innerStyle}>
                        <div className={styles.h2Container}>
                            <h2>Congratulations on finishing {title}!</h2>
                        </div>
                        <div className={styles.summary}>
                            <h3>Here's a summary of what we've covered this topic:</h3>
                            <ul>
                                <li>topic content</li>
                                <li>topic content</li>
                                <li>topic content</li>
                                <li>topic content</li>
                                <li>topic content</li>
                            </ul>
                        </div>
                        <div className={styles.button}>
                        <Link to="/topic-overview">
                           <Button text={'Beginning'}/>
                        </Link>
                        <Link to="/dashboard">
                            <Button text={'Dashboard'}/>
                        </Link>
                        <Link to="/tools">
                           <Button text={'Unlocked Tools'}/>
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

export default TopicConclusion;
