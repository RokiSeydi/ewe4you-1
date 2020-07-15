import React, { Component } from 'react';
import styles from "./StressGraph.module.scss";
import { PieChart } from "react-minimal-pie-chart";

import NavigationBar from "../../components/Navigation/NavigationBar";

class StressGraph extends Component {
   
  state = {  
  relationship: 1,
  work: 1,
  life: 1
  }


  getGraphJsx = () => {
    let  pieChart = <div className={styles.graph}><PieChart
        data={[
          {
            title: "Life",
            value: this.state.life,
            color: "#E38627",
          },
          {
            title: "Relationship",
            value: this.state.relationship,
            color: "#C13C37",
          },
          {
            title: "Work",
            value: this.state.work,
            color: "#6A2135",
          },
        ]}
      /></div>;

    for (const answer in this.state) {
      if (answer === 0 || answer === "") pieChart = <p> Fill in the answers</p>;
    }  

    return pieChart;
  }


  render() { 
    return (
      <>
      <NavigationBar/>
        <div className={styles.container}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <h2>Living Stress Graph</h2>
            {/* {this.getGraphJsx()} */}
              <div className={styles.graph}><PieChart
                data={[
                  {
                    title: "Life",
                    value: this.state.life,
                    color: "#E38627",
                  },
                  {
                    title: "Relationship",
                    value: this.state.relationship,
                    color: "#C13C37",
                  },
                  {
                    title: "Work",
                    value: this.state.work,
                    color: "#6A2135",
                  },
                ]}
              /></div>
              <div className={styles.inputContainer}>
                <p>What causes you the most stress?</p>
                <input
                  type="number"
                  placeholder="e.i life"
                  onChange={(e) =>
                    this.setState({ life: parseInt(e.target.value) })
                  }
                />
                <input
                  type="number"
                  placeholder="e.i relationship"
                  onChange={(e) =>
                    this.setState({
                      relationship: parseInt(e.target.value),
                    })
                  }
                />
                <input
                  type="number"
                  placeholder="e.i work"
                  onChange={(e) =>
                    this.setState({ work: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
    
 
export default StressGraph;
