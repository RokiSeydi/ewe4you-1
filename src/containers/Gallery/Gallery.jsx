import React, { Component } from "react";
import styles from "./Gallery.module.scss";
import Polaroid from "../../components/Polaroid";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Button from "../../components/Button/Button.jsx";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <>
        <NavigationBar />
        <section className={styles.gallery}>
          <div className={styles.polaroidContainer}>
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <Polaroid />
            <div className={styles.buttonWrapper}>
              <Button text={"upload picture"} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Gallery;
