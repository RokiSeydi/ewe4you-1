import React, { Component } from 'react';
import styles from "./WellBean.module.scss"

// import wellbeans from "../../data/wellbeans";
import img from "../../assets/wellbeans/bakedbean.png";
import BeanList from "../BeanList";
import { firestore } from "../../firebase";
import wellbeans from "../../data/wellbeans";


class WellBean extends Component {
  state = {
    wellbeans: wellbeans, 
    onBean: false,
    currentBean: "hello",
    currentInputText: "",
    otherBeans: []
   }

  componentDidMount() {
    console.log(this.props.user);
    this.getWellBeanState();
    // this.updateBeanstoDB();
  }

  getWellBeanState = () => {
    firestore
      .collection("WellBean")
      .doc(this.props.user.uid)
      .get()
      .then((doc) => {  
        if (doc.data()) this.setState({ wellbeans: doc.data()});
      })
      .catch((err) => console.log(err));
  };

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
      return this.state.wellbeans.beans.filter((bean) => selectedBean.Id !== bean.Id);
    }

    addFeeling = (add, index) => {
      if(add){
        let updatedBean = this.state.currentBean;
        let beansArray = [];
        beansArray.push(updatedBean);
        beansArray.push(this.state.otherBeans[0]);
        beansArray.push(this.state.otherBeans[1]);
        beansArray.push(this.state.otherBeans[2]);

        if(updatedBean.feelings.length<5){
          updatedBean.feelings.push(this.state.currentInputText);
          this.setState({
            currentBean: updatedBean,
            currentInputText: "",
            wellbeans: {beans: beansArray}
          }, this.updateBeansInDB)
        }
      }else{
        let updatedBean = this.state.currentBean;
        updatedBean.feelings.splice(index, 1);
        let beansArray = [];
        beansArray.push(updatedBean);
        beansArray.push(this.state.otherBeans[0]);
        beansArray.push(this.state.otherBeans[1]);
        beansArray.push(this.state.otherBeans[2]);
        this.setState({
          currentBean: updatedBean,
          wellbeans: {beans: beansArray}
        }, this.updateBeansInDB)
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

    updateBeansInDB = () => {
        firestore
          .collection("WellBean")
          .doc(this.props.user.uid)
          .set({
            beans: this.state.wellbeans.beans
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err)) 
    }
    
    // updateBeanstoDB = () => {
    //   console.log("this has happened");
    //     firestore
    //       .collection("WellBean")
    //       .doc("testuid")
    //       .set({
    //         beans: this.state.wellbeans.beans
    //       })
    //       .then(this.getWellBeanState)
    //       .catch((err) => console.log(err)) 
    // }

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
                <div className={styles.beanDiv}><img src={this.state.wellbeans.beans[0].image} 
                onClick={() => this.clickedBean(this.state.wellbeans.beans[0])} alt="bean"/>
                </div>
                <span>{this.state.wellbeans.beans[0].title}</span>
              </div>         
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={this.state.wellbeans.beans[1].image} 
                onClick={() => this.clickedBean(this.state.wellbeans.beans[1])} alt="bean"/>
                </div>
                <span>{this.state.wellbeans.beans[1].title}</span>
              </div>         
            </div>
            <div className ={styles.beanRow}>
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={this.state.wellbeans.beans[2].image} 
                onClick={() => this.clickedBean(this.state.wellbeans.beans[2])} alt="bean"/>
                </div>
                <span>{this.state.wellbeans.beans[2].title}</span>
              </div>         
              <div className={styles.beanContainer}>
                <div className={styles.beanDiv}><img src={this.state.wellbeans.beans[3].image} 
                onClick={() => this.clickedBean(this.state.wellbeans.beans[3])} alt="bean"/>
                </div>
                <span>{this.state.wellbeans.beans[3].title}</span>
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