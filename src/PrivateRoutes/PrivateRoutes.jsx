import React, { Component } from "react";
import firebase from "../firebase";
import { navigate } from "@reach/router";
import NavigationBar from "../components/Navigation/NavigationBar";



class PrivateRoutes extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }

  render() {
    const { children } = this.props;
    return <>
      <NavigationBar signOut={this.props.signOut} />
      {this.props.user ? children : <p>Loading...</p>}
    </>;
  }
}

export default PrivateRoutes;
