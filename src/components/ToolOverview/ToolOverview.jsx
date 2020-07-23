import React, { Component } from 'react';
import styles from './ToolOverview.module.scss';
import picture from "../../assets/placeholder.jpg";
import { Link } from '@reach/router';

class ToolOverview extends Component {
  render() {
    const {
      title,
      text,
      startUrl,
      backUrl, 
      innerColour, 
      outerColour
    } = this.props.tool;

    const innerStyle = {
      backgroundColor: innerColour
    };
    const outerStyle = {
      backgroundColor: outerColour
    };

    return (
      <>
        <div className ={styles.container} style={outerStyle}>
          <div className={styles.outer}>
                <h1>{title}</h1>  
            <div className={styles.inner} style={innerStyle}>
              <div>
                <img src={picture} alt={title}/>
              </div>
              <div>
                <p>{text}</p>
                <Link to={startUrl}><p className={styles.links}>Start Tool</p></Link>
                      
                <a href={backUrl} className={styles.links}>Go Back</a>
                </div>
            </div>
                <br/>
          </div>
        </div>
      </>
    );
  }
}

export default ToolOverview;

