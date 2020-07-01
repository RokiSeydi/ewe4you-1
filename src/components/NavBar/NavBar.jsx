
import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../img/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends React.Component{
  render() {
      return (
        <>
        <nav>
          <img src={logo} alt="E" />
          
            <ul>
              <li className={styles.links}>
                <a href="./dashboard">
                <FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon>
                  Dashboard</a>
              </li>
              <li>
                <a href="./">
                <FontAwesomeIcon icon="comments"></FontAwesomeIcon>
                  Topics</a>
              </li>
              <li>
                  <a href="./">
                <FontAwesomeIcon icon="wrench"></FontAwesomeIcon>
                  Toolbox</a>
              </li>
            </ul>
          
  
          <div className={styles.myaccountlink}>
            <a href="#">
              <FontAwesomeIcon icon="user"></FontAwesomeIcon>
              My Account</a>
          </div>
        </nav>


        </>
      );
  }
}
export default NavBar;