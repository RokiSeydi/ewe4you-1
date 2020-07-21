import React, { Component } from 'react';
import styles from "./Polaroid.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Polaroid extends Component {
  state = {  }
  render() { 
    const{src} = this.props;
    return (
      <> 
  <div className={styles.polaroid}>
    <div>
      <img src={src} alt="avatar"className={styles.avatar}/>
    </div>
    <p className={styles.caption}>{this.props.text} <span className={styles.icon}><FontAwesomeIcon icon="times-circle" className={styles.delete} onClick={this.props.delete}></FontAwesomeIcon></span></p>
  </div>
      </>
    )
  }
}

export default Polaroid;