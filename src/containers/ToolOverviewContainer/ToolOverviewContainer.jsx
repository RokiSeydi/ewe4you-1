import React, { Component } from "react";
import ToolOverview from "../../components/ToolOverview";
import styles from "./ToolOverviewContainer.module.scss";

class ToolOverviewContainer extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
          <ToolOverview tool={this.props.tool}/>
        </div>
      </>
    );
  }
       
}
export default ToolOverviewContainer;
