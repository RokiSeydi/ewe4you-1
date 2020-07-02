import React, { Component } from 'react';
import styles from './App.module.scss';
import Routes from "./Routes/Routes";


class App extends Component {
  
  render() {
  
    return (

      <>
        <section className={styles.content}>
          <Routes />
        </section>
      </>
    )
  } 
}


;export default App;