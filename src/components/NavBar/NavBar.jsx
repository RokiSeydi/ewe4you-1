import React, { Component } from "react";
import styles from "./NavBar.module.scss";
// import logo from "../img/ewe4you.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends React.Component{
  render() {
      return (
        <>
        {/* <img src={logo} alt="Ewe 4 Ewe logo" /> */}
        <div className="">
          <span className={styles.fa}>
          <FontAwesomeIcon icon="comments" />
        </span>
          <a href="./dashboard">
          <FontAwesomeIcon icon="comments"></FontAwesomeIcon>
            Dashboard</a>
        </div>


        </>
      );
  }
}
export default NavBar;