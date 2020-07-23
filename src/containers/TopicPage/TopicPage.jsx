import React, { Component } from "react";
import CardCarousel from "../../components/CardCarousel";
import styles from "./TopicPage.module.scss";


class TopicPage extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
          <CardCarousel cardType={"topics"} />
        </div>
      </>
    );
  }
}

export default TopicPage;
