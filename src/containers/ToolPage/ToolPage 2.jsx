import React, { Component } from 'react';
import CardCarousel from "../../components/CardCarousel"
import styles from "./ToolPage.module.scss";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

class ToolPage extends Component {
  render() { 
    return ( 
      <>
      <NavigationBar/>
      <div className={styles.Flexed} >
        <CardCarousel cardType={'tools'}/>
      </div>
      </>
     )
  }
}
 
export default ToolPage;
