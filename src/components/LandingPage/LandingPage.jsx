import React, { Component } from 'react';
import styles from './LandingPage.module.scss';
import NavigationBar from "../Navigation/NavigationBar/NavigationBar";

class LandingPage extends Component {
  render() {
    return (

      <>
        <NavigationBar
          user={this.props.user}
          signIn={this.props.signIn}
          signOut={this.props.signOut} />

        <div className={styles.background}>
          <h1>Welcome to Ewe4You</h1>
          <h3>Teaching ewe about your mental wellbeing</h3>
        </div>
      </>
    );
  }
}

export default LandingPage;