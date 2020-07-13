import React, { Component } from 'react';
import styles from "./PositiveAffirmations.module.scss";
import NavigationBar from "../../Components/Navigation/NavigationBar/NavigationBar";

class PositiveAffirmations extends Component {
    state = {
        affirmations: [],
        userInput: "",
    }
    
    getUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    updateAffirmations = () => {
        const updatedAffirmations = [...this.state.affirmations]
        updatedAffirmations.push(this.state.userInput)
        this.setState({
            affirmations: updatedAffirmations
        })   }
    
    showInstructions = () => {
        return this.state.affirmations.length > 2 ? <p className={styles.showInstructionsStyle}> Repeat these 3 times to yourself in a mirror
               You will help create a more positive narrative about yourself if you do this regularly. It will also help to create a more flexible and healthy view of yourself. </p> : null;
    }


    render() { 

    
        return ( 
            <>
            <NavigationBar/>
            <section className={styles.header}>.
            <h1>Positive Affirmations</h1>
                <p>Please add 3 - 5 affirmations about yourself and/or your life.</p>
            </section>
            <section className={styles.toolPage}>
                <input type="text" onInput={(e) => this.getUserInput(e)}/>
                <button onClick={this.updateAffirmations}>Add</button>
                {this.state.affirmations.map(affirmation => <p>{affirmation}</p>)}
            {this.showInstructions()}
            </section>
            </>
            
        );
    }
}  

export default PositiveAffirmations;