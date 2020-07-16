import React, { Component } from "react";
import ToolOverview from "../../components/ToolOverview";
import styles from "./ToolOverviewContainer.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";

import tool from "../../data/tools";

class ToolOverviewContainer extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className={styles.Flexed}>
          <ToolOverview tool={tool[1]}/>
        </div>
      </>
    );
  }
}
export default ToolOverviewContainer;
