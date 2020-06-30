import React, { Component } from 'react';
import styles from "./App.module.scss";
import TopicCard from "./Components/TopicCard";
import image from "./img/ewe4you.jpg";
//import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
    <>
    <div className={styles.Flexed}>
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </div>
    {image}
    </>
    
  
  
    );
  }
}

export default App;

