import React, { Component } from 'react';
//import styles from './App.module.scss';
import NavBar from "./components/NavBar";

import library from './data/fa-library';

class App extends Component {
  render() {
    return (
      <>
      <div>This is my component.</div>
      <section>
        <NavBar />
      </section>
      </>
    );
  }
}

export default App;
