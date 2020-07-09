import React, { Component } from 'react';
import styles from "./BurgerMenu.module.scss";

class BurgerMenu extends Component {
 
    render() { 
     return (    
   
      <div className={styles.Wrapper} onClick={this.props.handleNavbar} >
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
  
   );
 }
}   
   
export default BurgerMenu;


