import React, { Component } from 'react';
import CardCarousel from "../../Components/CardCarousel"
import styles from "./ToolPage.module.scss";

class ToolPage extends Component {
  render() { 
    return ( 
      <div className={styles.Flexed} >
      <CardCarousel cardType={'tools'}/>
    </div>
     )
  }
}
 
export default ToolPage;
