import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router'

class NavigationBar extends Component{
  render() {
      return (
        <>
        <nav>
          <Link to="/">
              <img src={logo} alt="sheep logo"/>
          </Link>
          <div className={styles.links}>
            <Link to="/dashboard"> <p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon></span>Dashboard</p></Link>
            <Link to="/topics"><p><span><FontAwesomeIcon icon="comments"></FontAwesomeIcon></span>Topics</p></Link>
            <Link to="/tools"><p><span><FontAwesomeIcon icon="wrench"></FontAwesomeIcon></span>Toolbox</p></Link>
          </div>
          <div className={styles.account}>
            <p><span><FontAwesomeIcon icon="user"></FontAwesomeIcon></span>My Account</p>
          </div>
        </nav>
        </>
      );
  }
}
export default NavigationBar;