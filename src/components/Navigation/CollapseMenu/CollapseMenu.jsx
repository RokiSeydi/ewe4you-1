import React, {Component} from 'react';
import styles from './CollapseMenu.module.scss';

import { Link } from '@reach/router'

class CollapseMenu extends Component {

  render() { 
    if (this.props.navbarState) {
      return (
        <div className={styles.collapseMenu}>
          <ul className={styles.navLinks}>
          <p onClick={this.props.handleNavbar}><Link to="/dashboard">Dashboard</Link></p>
          <p onClick={this.props.handleNavbar}><Link to="/topics">Topics</Link></p>
          <p onClick={this.props.handleNavbar}> <Link to="/tools">Toolbox</Link></p>
          <p onClick={this.props.signOut}>Log out</p>
          </ul>
        </div>
      );
    }
    return null;
  }
}
 
export default CollapseMenu;
