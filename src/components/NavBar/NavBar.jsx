
import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import logo from "../../img/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component{
  render() {
      return (
        <>
        <nav>
            <img src={logo} alt="sheep logo"/>
          <div className={styles.links}>
            <p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon></span>Dashboard</p>
            <p><span><FontAwesomeIcon icon="comments"></FontAwesomeIcon></span>Topics</p>
            <p><span><FontAwesomeIcon icon="wrench"></FontAwesomeIcon></span>Toolbox</p>
          </div>
          <div className={styles.account}>
            <p><span><FontAwesomeIcon icon="user"></FontAwesomeIcon></span>My Account</p>
          </div>
        </nav>
        </>
      );
  }
}
export default NavBar;