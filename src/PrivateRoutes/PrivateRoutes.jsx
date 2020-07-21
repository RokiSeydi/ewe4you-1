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
      {/* <NavigationBar /> */}
      {children}
    </>;
  }
}

export default PrivateRoutes;
