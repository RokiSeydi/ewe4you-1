import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss"
import TopicCard from "../TopicCard"
import Carousel from 'react-elastic-carousel';
import NavigationBar from "../NavigationBar/NavigationBar"

class CardCarousel extends Component {
  
  render () {
   
    return (
      <>
      <NavigationBar/>
      <Carousel>
        <section className={styles.sectionFlex}>
        < TopicCard />
        < TopicCard />
        < TopicCard />
        </section>
        <section className={styles.sectionFlex}>
        < TopicCard />
        < TopicCard />
        < TopicCard />
        </section>
        <section className={styles.sectionFlex}>
        < TopicCard />
        < TopicCard />
        < TopicCard />
        </section>
      </Carousel>
      </>
    )
  }
}

export default CardCarousel;