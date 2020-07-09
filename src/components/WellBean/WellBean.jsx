import React, { Component } from 'react';
import styles from "./WellBean.module.scss"

import wellbeans from "../../data/wellbeans";
import img from "../../assets/wellbeans/bakedbean.png"

class WellBean extends Component {
  state = { 
    onBean: false
   }

  render() { 

    console.log(wellbeans[0].image);

    if (this.state.onBean) {
      return (
        <>
        <p>list of beans</p>
        </>
      );
    } else{
      return (
        <>
        <div className ={styles.noBeanContainer}>
          <h1>Pick a bean</h1>
          <section className={styles.allbeans}>
            <div className ={styles.beanRow}>          
              <div className={styles.beanDiv}><img src={wellbeans[0].image}></img></div>
              <div className={styles.beanDiv}><img src={wellbeans[1].image}></img></div>
            </div>
            <div className ={styles.beanRow}>
              <div className={styles.beanDiv}><img src={wellbeans[2].image}></img></div>
              <div className={styles.beanDiv}><img src={wellbeans[3].image}></img></div>
            </div>
          </section>
        </div>
        </>
      );
    }
  }
}
 
export default WellBean;