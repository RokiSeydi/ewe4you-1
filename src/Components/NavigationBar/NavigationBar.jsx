import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";
import logo from "../../img/logo.jpg";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faComments, faWrench, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@reach/router';

library.add(faTachometerAlt, faComments, faWrench, faUser, fab, faPlayCircle)

class NavigationBar extends Component{

state = {
  isOpen: true
}

iconClick = () => {
  this.setState({ isOpen: !this.state.isOpen});
}

  render() {
    const display = this.state.isOpen ?   
   
    (<nav>
      <div className={styles.links}>
        <p><span><FontAwesomeIcon icon="tachometer-alt" /><Link to="/dashboard">Dashboard</Link></span></p>
        <p><span><FontAwesomeIcon icon="comments" /><Link to="/topic-overview">Topics</Link></span></p>
        <p><span><FontAwesomeIcon icon="wrench" /><Link to="/tools">Toolbox</Link></span></p>
      </div>
      <div className={styles.account}>
        <p><span><FontAwesomeIcon icon="user"/><Link to="/myaccount">My Account</Link></span></p>
      </div>
    </nav>

       ) : null;

      return (
        <nav className={styles.navbar} > 
          <img onClick={this.iconClick} src={logo} alt="sheep logo"/>            
            {display}
      </nav>
    );
  }
}
export default NavigationBar;