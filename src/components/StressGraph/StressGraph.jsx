import React, { Component } from 'react';
import styles from "./StressGraph.module.scss";
import { PieChart } from "react-minimal-pie-chart";
import { firestore } from "../../firebase.js";

import NavigationBar from "../../components/Navigation/NavigationBar";

class StressGraph extends Component {
   
  state = {  
    graph: {
      relationship: 1,
      work: 1,
      life: 1,
      bodyImage: 1,
      diet: 1, 
    },
    value: ""
  }

  addOneToStressor = () => {
    const graphUpdate = {...this.state.graph}
    graphUpdate[this.state.value] += 1
    return graphUpdate;
  }

  addToDatabase = (e) => {
    e.preventDefault()
    firestore
        .collection("StressGraph")
        .doc("Stressors")
        .set( this.addOneToStressor() )
        .then(() => this.getStressGraphResults())
        .catch((err) => console.log(err))
}

  getStressGraphResults = () => {
    firestore
    .collection("StressGraph")
    .doc("Stressors")
    .get()
    .then((doc) => {
        const data = doc.data();
        this.setState({
          graph: {
          relationship: data.relationship,
          work: data.work,
          life: data.life,
          bodyImage: data.bodyImage,
          diet: data.diet
        }
      });
    })
  }

  componentDidMount() {
    this.getStressGraphResults();
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  render() { 
  
    return (
      <>
      <NavigationBar/>
        <div className={styles.container}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <h2>Living Stress Graph</h2>
           
              <div className={styles.graph}><PieChart
                data={[
                  {
                    title: "Life",
                    value: this.state.graph.life,
                    color: "#E38627",
                  },
                  {
                    title: "Relationship",
                    value: this.state.graph.relationship,
                    color: "#C13C37",
                  },
                  {
                    title: "Work",
                    value: this.state.graph.work,
                    color: "#6A2135",
                  },
                  {
                  title: "bodyImage",
                  value: this.state.graph.bodyImage,
                  color: "#c13224",
                },

                {
                  title: "diet",
                  value: this.state.graph.diet,
                  color: "#c13d57",
                },
                ]}
              /></div>

          
              <div className={styles.inputContainer}>

              <p>What causes you the most stress?</p>
                <form className={styles.form} onSubmit={this.addToDatabase}>
                  <div>
                    <label for="relationship">Relationship</label>
                    <input type="radio" value="relationship" id="relationship"
                   onChange={this.handleChange} name="stressor" />
                  </div>

                  <div>
                    <label for="work">Work</label>
                    <input type="radio" value="work" id="work"
                    onChange={this.handleChange} name="stressor"/>
                  </div>

                  <div>
                    <label for="life">Life</label>
                    <input type="radio" value="life" id="life"
                    onChange={this.handleChange} name="stressor"/>
                  </div>

                  <div>
                    <label for="bodyImage">Body Image</label>
                    <input type="radio" value="bodyImage" id="bodyImage"
                    onChange={this.handleChange} name="stressor"/>
                  </div>

                  <div>
                    <label for="diet">Diet</label>
                    <input type="radio" value="diet" id="diet"
                    onChange={this.handleChange} name="stressor"/>
                  </div>

                  <input type="submit" disabled={this.state.value ? false : true} className={styles.btn}/>
                </form>

              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
}
    
 
export default StressGraph;
