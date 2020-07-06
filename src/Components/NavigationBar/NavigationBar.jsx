import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";
import logo from "../../img/logo.jpg";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faComments, faWrench, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
// import Dashboard from "../Dashboard/Dashboard/Dashboard";
import { Link } from '@reach/router';

library.add(faTachometerAlt, faComments, faWrench, faUser, fab, faPlayCircle)

class NavigationBar extends Component{
  render() {
      return (
        <>
        <nav>
            <img src={logo} alt="sheep logo"/>
          <div className={styles.links}>
            <p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon><Link to="/dashboard">Dashboard</Link></span></p>
            <p><span><FontAwesomeIcon icon="comments"></FontAwesomeIcon><Link to="/topic-overview">Topics</Link></span></p>
            <p><span><FontAwesomeIcon icon="wrench"></FontAwesomeIcon><Link to="/tools">Toolbox</Link></span></p>
          </div>
          <div className={styles.account}>
            <p><span><FontAwesomeIcon icon="user"></FontAwesomeIcon><Link to="/">My Account</Link></span></p>
          </div>
        </nav>
        </>
      );
  }
}
export default NavigationBar;