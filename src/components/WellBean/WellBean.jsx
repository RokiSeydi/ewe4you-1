import React, { Component } from 'react';
import styles from "./WellBean.module.scss"

import wellbeans from "../../data/wellbeans";
import img from "../../assets/wellbeans/bakedbean.png"

class WellBean extends Component {
  state = { 
    onBean: false,
    currentBean: "hello",
    otherBeans: []
   }

   clickedBean = (bean) =>{

    console.log(bean.title)

    this.setState({
      onBean: !this.state.onBean,
      currentBean: bean 
    })
    console.log(this.state);
    this.shuffleBeans(bean);
  }

  shuffleBeans = (selectedBean) => {
    let otherBeanArray = [];
    wellbeans.map((bean) => {
      if(selectedBean.Id != bean.Id){
        otherBeanArray.push(bean);
      }
    })
    this.setState({
      otherBeans: otherBeanArray
    })
  }

  render() {
    if (this.state.onBean) {
      return (
        <>
        <section className={styles.onBeanSection}>
          <div className={styles.otherBeans}>
          <img src={this.state.otherBeans[0].image}></img>
          <img src={this.state.otherBeans[1].image}></img>
          <img src={this.state.otherBeans[2].image}></img> 
          </div>
          <div className={styles.currentBean}>
            <div className={styles.currentBeanImage}>
              <img src={this.state.currentBean.image}></img>
            </div>
            <div className={styles.currentBeanList}>
              <p>feeling 1</p>
              <p>feeling 2</p>
              <p>feeling 3</p>
              <p>feeling 4</p>
              <p>feeling 5</p>
            </div>
          </div>
        </section>
        </>
      );
    } else{
      return (
        <>
        <div className ={styles.noBeanContainer}>
          <h1>Pick a bean</h1>
          <section className={styles.allbeans}>
            <div className ={styles.beanRow}>          
              <div className={styles.beanDiv}><img src={wellbeans[0].image} onClick={() => this.clickedBean(wellbeans[0])}></img></div>
              <div className={styles.beanDiv}><img src={wellbeans[1].image} onClick={() => this.clickedBean(wellbeans[1])}></img></div>
            </div>
            <div className ={styles.beanRow}>
              <div className={styles.beanDiv}><img src={wellbeans[2].image} onClick={() => this.clickedBean(wellbeans[2])}></img></div>
              <div className={styles.beanDiv}><img src={wellbeans[3].image} onClick={() => this.clickedBean(wellbeans[3])}></img></div>
            </div>
          </section>
        </div>
        </>
      );
    }
  }
}
 
export default WellBean;