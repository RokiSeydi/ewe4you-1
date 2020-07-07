import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss"
import TopicCard from "../TopicCard"
import ToolCard from "../ToolCard"
import Carousel from 'react-elastic-carousel';
import topics from "../../data/topics";

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
      <Carousel>
        {topics.map((topic, index) => {
          return <TopicCard topic={topic} key={index}/>
        })}
      </Carousel>
    )
  }
}

export default CardCarousel