import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss"
import TopicCard from "../TopicCard"
import ToolCard from "../ToolCard"
import Carousel from 'react-elastic-carousel';




class CardCarousel extends Component {
  
getCard = () => {
  const {cardType} = this.props;
 if (cardType === 'tools') {
 return <ToolCard />
 }
 if (cardType === 'topics') {
 return <TopicCard />
 }
}

  render () {

    return (
      <>
     <div className={styles.carouselConatiner}>
        <Carousel>
          <section className={styles.sectionFlex}>
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
          </section>
          <section className={styles.sectionFlex}>
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
          </section>
          <section className={styles.sectionFlex}>
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
          </section>
        </Carousel>
      </div>
      </>
    )
  }
}

export default CardCarousel;