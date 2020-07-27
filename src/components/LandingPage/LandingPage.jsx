import React, { Component } from 'react';
import styles from './LandingPage.module.scss';
import GoogleButton from "react-google-button/dist/react-google-button"

import firebase from "../../firebase";
import { navigate } from "@reach/router";



class LandingPage extends Component {
  render() {

    firebase.auth().onAuthStateChanged(function(user) {
      if (user)  navigate("/dashboard");
      }
    );

    return (

      <>
        <div className={styles.background}>
          <div className={styles.titles}>
            <h1>Welcome to Ewe4You</h1>
            <h3>Teaching ewe about your mental wellbeing</h3>
          </div>
          <div className={styles.buttons}>
            <GoogleButton onClick={this.props.signIn} />
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;