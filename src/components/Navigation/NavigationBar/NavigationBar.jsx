import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";

import logo from "../../../assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from '@reach/router';

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CollapseMenu from "../CollapseMenu/CollapseMenu";

class NavigationBar extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  getSignInOutJsx = () => {
    const { signIn, signOut, user } = this.props;

    return user ? (
      <button onClick={signOut}>Sign Out</button>
    ) : (
        <button onClick={signIn}>Sign In</button>
      );
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={logo} alt="sheep logo" />
          </a>
          <div className={styles.FlexContainer}>
            <div className={styles.NavLinks}>
              <div className={styles.links}>
                <Link to="/dashboard"><p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon></span>Dashboard</p></Link>
                <Link to="/topics"><p><span><FontAwesomeIcon icon="comments"></FontAwesomeIcon></span>Topics</p></Link>
                <Link to="/tools"><p><span><FontAwesomeIcon icon="wrench"></FontAwesomeIcon></span>Toolbox</p></Link>
              </div>
              <div className={styles.account}>
                {this.getSignInOutJsx()}
                {/* <Link to="/myaccount"> <p><span><FontAwesomeIcon icon="user"></FontAwesomeIcon></span>My Account</p></Link> */}
              </div>
            </div>
          </div>
          <div className={styles.BurgerWrapper}>
            <BurgerMenu handleNavbar={this.handleNavbar} />
          </div>
        </nav>
        <CollapseMenu handleNavbar={this.handleNavbar} navbarState={this.state.navbarOpen} />
      </>
    );
  }
}

export default NavigationBar;
