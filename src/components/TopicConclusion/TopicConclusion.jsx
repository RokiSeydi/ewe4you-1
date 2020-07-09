import React, { Component } from 'react';
import styles from './TopicConclusion.module.scss';
import { Link } from '@reach/router';

class TopicConclusion extends Component {
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
                        <br/>  
                    <div className={styles.inner}>
                        <h2>Congratulations on finishing {title}</h2>
                        <div>
                        <h3>Here's a summary of what we've covered this topic:</h3>
                        <ul>
                            <li>blah</li>
                            <li>blah</li>
                            <li>interesting stuff</li>
                            <li>good stuff</li>
                            <li>ooof great content</li>
                        </ul>
                        </div>
                        <div className={styles.buttons}>
                            <Link to="/tools">
                                Tools Page
                            </Link>
                            <Link to="/topics">
                                Topics Page
                            </Link>
                            <Link to="/dashboard">
                                Dashboard
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