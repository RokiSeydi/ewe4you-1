import React, { Component } from 'react';
import styles from "./TopicCard.module.scss";



class TopicCard extends Component {
  contentLimit = (summary) => 
    summary.length <500
    ? summary
    : summary.substring(0,400) + "...";
  render() { 
    return ( 
      
        <section className={styles.Topics}>
            <div className={styles.heading}>
            <h2>stress</h2>
            </div>
            <div className={styles.inner}>
              <p>
                {this.contentLimit("This is content that will be fed into the card about the topic titled above. This info should be limited in size to fit the available space, however if the content is too much, then it will be limited by the function above... for example... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odit distinctio eveniet ex omnis rem earum fugit exercitationem laboriosam molestias deserunt, suscipit quae quo! Recusandae, itaque? Dolor voluptatibus perferendis possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus ut, iure expedita similique laboriosam nesciunt rem distinctio vero, natus debitis placeat sunt repellendus est ullam nihil mollitia consequatur culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum illum odit tempora expedita. Perspiciatis repudiandae fuga quibusdam exercitationem, sit dolor fugiat dicta aspernatur perferendis harum, explicabo, earum eligendi facere!")}
              </p>
            </div>
        </section>

     );
  }
}
 
export default TopicCard;

//need to make a big rectangle, containing the topic title, and a smaller rectangle.
//the smaller rectangle, nested on the parent rectangle, contains information about the topic