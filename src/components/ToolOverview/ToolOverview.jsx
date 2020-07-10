import React, { Component } from 'react';
import styles from './ToolOverview.module.scss';
import { Link } from '@reach/router'; 
import Button from "../Button";

class ToolOverview extends Component {
  render() {
    const {
      title,
      image,
      text,
      startUrl,
      backUrl, 
      innerColour, 
      outerColour
    } = this.props.tool;
    console.log(this.props.tool);

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
                <img src={image} alt={title}/>
              </div>
              <div>
                <p>{text}</p>
                <Button text={'Start Tool'} link={startUrl}/>
                      
                <Button text={'Go Back'} link={backUrl}/>
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

