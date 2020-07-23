import React, { Component } from "react";
import ToolOverview from "../../components/ToolOverview";
import styles from "./ToolOverviewContainer.module.scss";
import tool from "../../data/tools";

class ToolOverviewContainer extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
          <ToolOverview tool={tool[1]} user={this.props.user}/>
        </div>
      </>
    );
  }
}
export default ToolOverviewContainer;
