import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss"
import TopicCard from "../TopicCard"
import Carousel from 'react-elastic-carousel';

class CardCarousel extends Component {
  
  render () {
   
    return (
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
    )
  }
}

export default CardCarousel;