import React, { Component } from 'react';
import styles from "./Polaroid.module.scss";

class Polaroid extends Component {
  state = {  }
  render() { 
    return (
      <> 
  <div className={styles.polaroid}>
    <div className={styles.img}></div>
    <p className={styles.caption}>Me at the zoo!</p>
  </div>
      </>
    )
  }
}
 
export default Polaroid;