import React, { Component } from 'react';
import CardCarousel from "../../Components/CardCarousel"
import styles from "./TopicPage.module.scss"
import NavigationBar from "../../Components/NavigationBar/NavigationBar"


class TopicPage extends Component {
  render() { 



    return ( 
      <>
       <NavigationBar/>
      <div className={styles.Flexed} >
      <CardCarousel cardType={'topics'}/>
    </div>
    </>
     )
  }
}



export default TopicPage;

















































