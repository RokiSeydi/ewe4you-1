import React, { Component } from 'react';
import styles from "./StressGraph.module.scss";
import { PieChart } from "react-minimal-pie-chart";
import { firestore } from "../../firebase.js";

import NavigationBar from "../../components/Navigation/NavigationBar";

class StressGraph extends Component {
   
  state = {  
  relationship: 1,
  work: 1,
  life: 1
  }

//   addToDatabase = () => {
//     firestore
//         .collection("StressGraph")
//         .doc("Stressors")
//         .set({ relationship: this.state.affirmations })
//         .set({ work: this.state.work })
//         .set({ life: this.state.life })
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }


// componentDidMount() {
//   firestore
//       .collection("StressGraph")
//       .doc("Stressors")
//       .get()
//       .then((doc) => {
//           const savedRelationship = doc.data().relationship;
//           this.setState({ relationship: savedRelationship });
//       })
//       .then((doc) => {
//         const savedWork = doc.data().work;
//         this.setState({ work: savedWork });
//       })
//       .then((doc) => {
//       const savedLife = doc.data().life;
//       this.setState({ life: savedLife });
//   })
// }

// updateInput = () => {
//   const updatedInput = [...this.state.relationship, ...this.state.work, ...this.state.life]
//   updatedInput.push(this.state.relationship)
//   this.setState({
//       relationship: updatedInput
//   })
  
//   updatedInput.push(this.state.work)
//   this.setState({
//       work: updatedInput
//   })
 
//   updatedInput.push(this.state.life)
//   this.setState({
//       life: updatedInput
//   })
// }

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

                <form className={styles.form}>

                  <input type="radio" value="Relationship" id="relationship"
                   onChange={this.handleChange} name="gender" />
                  <label for="male">Relationship</label>

                  <input type="radio" value="Work" id="Work"
                  onChange={this.handleChange} name="gender"/>
                  <label for="female">Work</label>

                  <input type="radio" value="fLife" id="Life"
                  onChange={this.handleChange} name="gender"/>
                  <label for="female">Life</label>

                  <button className={styles.btn}>Submit</button>

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
