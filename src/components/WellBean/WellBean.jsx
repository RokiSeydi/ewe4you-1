import React, { Component } from 'react';
import styles from "./WellBean.module.scss"

import wellbeans from "../../data/wellbeans";
import img from "../../assets/wellbeans/bakedbean.png";
import BeanList from "../BeanList";

class WellBean extends Component {
  state = { 
    onBean: false,
    currentBean: "hello",
    currentInputText: "",
    otherBeans: []
   }

   clickedBean = (selectedBean) =>{
    this.setState({
      onBean: !this.state.onBean,
      currentBean: selectedBean,
      otherBeans: this.shuffleBeans(selectedBean) 
    })
  }

    otherBeanClick = (newBean) => {
      this.setState({
        currentBean: newBean,
        otherBeans: this.shuffleBeans(newBean),
        currentInputText: ""
      })
    }

    shuffleBeans = (selectedBean) => {
      return wellbeans.filter((bean) => selectedBean.Id !== bean.Id);
    }

    addFeeling = (add, index) => {
      if(add){
        let updatedBean = this.state.currentBean;
        if(updatedBean.feelings.length<5){
          updatedBean.feelings.push(this.state.currentInputText);
          this.setState({
            currentBean: updatedBean,
            currentInputText: ""
          })
        }
      }else{
        let updatedBean = this.state.currentBean;
        updatedBean.feelings.splice(index, 1);
        this.setState({
          currentBean: updatedBean,
        })
      }
    }
    
    handleInputChange = (event) => {
      this.setState({currentInputText: event});
    }

    isFeelingListFull = () => {
      if  (this.state.currentBean.feelings.length<5) {
        return <BeanList canEdit ={true} addFeeling={this.addFeeling} onHandleChange={this.handleInputChange} inputText={this.state.currentInputText}/>
      }
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
                {this.isFeelingListFull()}
                {this.state.currentBean.feelings.map((feeling, index) => {
                  return <BeanList strFeeling={feeling} canEdit={false} addFeeling={this.addFeeling} key={index} index={index}/>
                })}
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