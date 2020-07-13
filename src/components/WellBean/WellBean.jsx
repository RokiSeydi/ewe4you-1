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
    this.setState({
      onBean: !this.state.onBean,
      currentBean: bean 
    })
    this.shuffleBeans(bean);
  }

  shuffleBeans = (selectedBean) => {
    let otherBeanArray = [];
    wellbeans.map((bean) => {
      if(selectedBean.Id !== bean.Id){
        otherBeanArray.push(bean);
      }
    })
    this.setState({
      otherBeans: otherBeanArray
    })
  }

  otherBeanClick = (newBean) => {
    this.shuffleBeans(newBean);
    this.setState({
      currentBean: newBean
    })
  }

  render() {
    if (this.state.onBean) {
      return (
        <>
        <div className={styles.onBeanSection}>
          <div className={styles.currentBean}>
            <div className={styles.currentBeanImage}>
              <img src={this.state.currentBean.image} alt="bean"></img>
            </div>
            <div className={styles.currentBeanList}>
              <h3>{this.state.currentBean.text}</h3>
              <div className ={styles.feelingListSection}>
                <p>feeling 1</p>
                <p>feeling 2</p>
                <p>feeling 3</p>
                <p>feeling 4</p>
                <p>feeling 5</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.otherBeans}>
            <div className={styles.otherBeanContainer}>
              <div className={styles.beanImageContainer}><img src={this.state.otherBeans[0].image} 
              onClick={() => this.otherBeanClick(this.state.otherBeans[0])} alt="bean"/>
              </div>
              <span>{this.state.otherBeans[0].title}</span>
            </div>
            <div className={styles.otherBeanContainer}>
              <div className={styles.beanImageContainer}><img src={this.state.otherBeans[1].image} 
              onClick={() => this.otherBeanClick(this.state.otherBeans[1])} alt="bean"/>
              </div>
              <span>{this.state.otherBeans[1].title}</span>
            </div>
            <div className={styles.otherBeanContainer}>
              <div className={styles.beanImageContainer}><img src={this.state.otherBeans[2].image} 
              onClick={() => this.otherBeanClick(this.state.otherBeans[2])} alt="bean"/>
              </div>
              <span>{this.state.otherBeans[2].title}</span>
            </div>
          </div>
        </div>
        </>
      );
    } else{
      return (
        <>
        <div className ={styles.noBeanContainer}>
          <h1>Pick a bean</h1>
          <section className={styles.allbeans}>
            <div className ={styles.beanRow}> 
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={wellbeans[0].image} 
                onClick={() => this.clickedBean(wellbeans[0])} alt="bean"/>
                </div>
                <span>{wellbeans[0].title}</span>
              </div>         
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={wellbeans[1].image} 
                onClick={() => this.clickedBean(wellbeans[1])} alt="bean"/>
                </div>
                <span>{wellbeans[1].title}</span>
              </div>         
            </div>
            <div className ={styles.beanRow}>
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={wellbeans[2].image} 
                onClick={() => this.clickedBean(wellbeans[2])} alt="bean"/>
                </div>
                <span>{wellbeans[2].title}</span>
              </div>         
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={wellbeans[3].image} 
                onClick={() => this.clickedBean(wellbeans[3])} alt="bean"/>
                </div>
                <span>{wellbeans[3].title}</span>
              </div>         
            </div>
          </section>
        </div>
        </>
      );
    }
  }
}
 
export default WellBean;