import React, { Component } from "react";
import styles from "./ToolCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faComments, faWrench, faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "@reach/router";

library.add(faTachometerAlt, faComments, faWrench, faUser, fab, faPlayCircle)

library.add(faTachometerAlt, faComments, faWrench, faUser, fab, faPlayCircle);

class ToolCard extends Component {
  contentLimit = (summary) =>
    summary.length < 500 ? summary : summary.substring(0, 400) + "...";
  render() {
    const {
      title,
      text,
      origin,
      innerColour,
      outerColour,
      toolsOverview,
    } = this.props.tool;

    const innerStyle = {
      backgroundColor: innerColour,
    };
    const outerStyle = {
      backgroundColor: outerColour,
    };
    return (
      <section className={styles.Tools} style={outerStyle}>
        <div className={styles.heading}>
          <h2>{title}</h2>
        </div>
        <div className={styles.inner} style={innerStyle}>
          <p></p>
        </div>
        <div className={styles.playsection}>
          <p>{text}</p>
          {origin==="Unlocked" ? 
          <Link to={toolsOverview}>
            <FontAwesomeIcon className={styles.playbutton} icon="play-circle" />
          </Link >: null}
          <p>{origin}</p>
        </div>
      </section>
    );
  }
}

export default ToolCard;
