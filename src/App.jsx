import React, { Component } from 'react';
import styles from "./App.module.scss";
import TopicCard from "./Components/TopicCard";
import image from "./img/ewe4you.jpg";
import CardCarousel from "./Components/CardCarousel"
//import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
    <>
    <div className={styles.Flexed}>
      <CardCarousel />
    </div>
    {image}
    </>

    );
  }
}

export default App;

