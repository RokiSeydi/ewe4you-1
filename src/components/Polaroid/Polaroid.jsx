import React, { Component } from 'react';
import styles from "./Polaroid.module.scss";

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
    <p className={styles.caption}>I'm all ears!</p>
  </div>
      </>
    )
  }
}
 
export default Polaroid;