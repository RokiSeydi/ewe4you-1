import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss"
import TopicCard from "../TopicCard"
import ToolCard from "../ToolCard"
import Carousel from 'react-elastic-carousel';

class CardCarousel extends Component {
  state = {
    cards: 2
  }
  
getCard = () => {
  const {cardType} = this.props;
 if (cardType === 'tools') {
 return <ToolCard />
 }
 if (cardType === 'topics') {
 return <TopicCard />
 }
}

componentDidMount() {
  if (window.innerWidth > 800) {
    this.setState({cards: 3})
  } else if (window.innerWidth < 800) {
    this.setState({cards: 2})
  } else if (window.innerWidth < 600) {
    this.setState({cards: 1})
  }
  // window.addEventListener('resize', numberOfCard)
}

  
  
  render () {
    
    
    console.log(window.innerWidth);
    console.log(this.state.cards);

    return (
      <div className={styles.cardcarousel}>
        <Carousel itemsToShow={this.state.cards}>
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        {this.getCard()}
        </Carousel>
      </div>
    )
  }
}

export default CardCarousel;