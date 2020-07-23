import React, { Component } from "react";
import ToolOverview from "../../components/ToolOverview";
import styles from "./ToolOverviewContainer.module.scss";
import tool from "../../data/tools";

class ToolOverviewContainer extends Component {
  render() {
    return (
      <>
        <div className={styles.Flexed}>
<<<<<<< HEAD
          <ToolOverview tool={this.props.tool}/>
=======
          <ToolOverview tool={tool[1]} user={this.props.user}/>
>>>>>>> 0d4ce2f80ad5b08fb2dc0611f7a3a079894fa89e
        </div>
      </>
    );
  }
}
export default ToolOverviewContainer;
