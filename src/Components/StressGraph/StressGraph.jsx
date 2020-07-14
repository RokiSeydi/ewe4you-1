import React, { Component } from 'react';
import styles from "./StressGraph.module.scss";
import { PieChart } from "react-minimal-pie-chart";

import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

class StressGraph extends Component {
   
       state = {  
        relationship: 0,
        work: 0,
        life: 0
       }


       render() { 
     

//  if (state == 0) {
//         return null;
//       } else {
//         return <PieChart/>
//       };
           return (
             <>
             <NavigationBar/>
               <h1>Living Stress Graph</h1>
               <div className={styles.container}>
                 <div className={styles.outer}>
                   <div className={styles.inner}>

                     <div className={styles.inputContainer}>
                       <p>What causes you the most stress?</p>
                       <input
                         type="number"
                         placeholder="Life stress"
                         onChange={(e) =>
                           this.setState({ life: parseInt(e.target.value) })
                         }
                       />
                       <input
                         type="number"
                         placeholder="Relationship stress"
                         onChange={(e) =>
                           this.setState({
                             relationship: parseInt(e.target.value),
                           })
                         }
                       />
                       <input
                         type="number"
                         placeholder="Work stress"
                         onChange={(e) =>
                           this.setState({ work: parseInt(e.target.value) })
                         }
                       />
                     </div>

                     <div className={styles.graph}>
                       <PieChart
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
