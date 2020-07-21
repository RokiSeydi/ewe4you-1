import React, {Component} from 'react';
import styles from './CollapseMenu.module.scss';

import { Link } from '@reach/router'

class CollapseMenu extends Component {

  render() { 
    if (this.props.navbarState) {
      return (
        <div className={styles.collapseMenu}>
          <ul className={styles.navLinks}>
            <Link to="/dashboard"><p>Dashboard</p></Link>
            <Link to="/topics"><p>Topics</p></Link>
            <Link to="/tools"><p>Toolbox</p></Link>
            <p onClick={this.props.signOut}>Log out</p>
          </ul>
        </div>
      );
    }
    return null;
  }
}
 
export default CollapseMenu;
