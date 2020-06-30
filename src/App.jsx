import React, { Component } from 'react';
//import styles from './App.module.scss';
import NavBar from "./components/NavBar";

import library from './data/fa-library';

class App extends Component {
  render() {
    return (
      <>
      <section>
        <NavBar />
      </section>
      <div>This is my component.</div>
      </>
    );
  }
}

export default App;
