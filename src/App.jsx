import React, { Component } from 'react';
import styles from './App.module.scss';
import Routes from "./Routes/Routes";
import "./data/fa-library";
import firebase, { provider } from "./firebase";


class App extends Component {

  state = {
    user: null,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {

    return (
      <>
        <section className={styles.content}>
          <Routes user={this.state.user}
            signIn={this.signIn}
            signOut={this.signOut} />
        </section>
      </>
    )
  }
}


export default App;