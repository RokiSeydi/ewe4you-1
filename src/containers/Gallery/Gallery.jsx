import React, { Component } from 'react';
import styles from "./Gallery.module.scss";
import Polaroid from "../../components/Polaroid";
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Button from "../../components/Button/Button "

class Gallery extends Component {
    state = {  }
    render() { 
        return (
            <>
          <NavigationBar />
          <section className={styles.gallery}>
          <div className={styles.polaroidContainer}>
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          < Polaroid />
          
          </div>
          </section>
          < Button text={'upload picture'}/>
          </>
        );
    }
}
 
export default Gallery ;