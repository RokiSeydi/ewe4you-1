import React, { Component } from 'react';
import styles from "./Polaroid.module.scss";
import avatar from "../../assets/placeholder.jpg";

class Polaroid extends Component {
  state = {  }
  render() { 
    return (
      <> 
  <div className={styles.polaroid}>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar"/>
    </div>
    <p className={styles.caption}>Me at the zoo!</p>
  </div>
      </>
    )
  }
}
 
export default Polaroid;