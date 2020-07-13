import React, { Component } from 'react';
import styles from "./PositiveAffirmations.module.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar"

class PositiveAffirmations extends Component {
    state = {
        affirmations: [],
        userInput: "",
        showInstructions: false,
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
    
    deleteAffirmations = () => {
        const deleteAffirmations = [...this.state.affirmations]
        deleteAffirmations.pop(this.state.userInput)
        this.setState({
            affirmations: deleteAffirmations
        })
    }
    
    updateInstructionsState = () => {
        this.setState({
            showInstructions: true
        })
    }

    render() { 
        return ( 
            <>
            <NavigationBar/>
            <section className={styles.header}>.
            <h1>Positive Affirmations</h1>
            {this.state.showIntructions || this.state.affirmations.length > 2 ? <p className={styles.showInstructionsStyle}> Repeat these 3 times to yourself in a mirror
               You will help create a more positive narrative about yourself if you do this regularly. It will also help to create a more flexible and healthy view of yourself. </p> : ""}
                <p>Please add 3 - 5 affirmations about yourself and/or your life.</p>
            </section>
            <section className={styles.toolPage}>
                <input type="text" onInput={(e) => this.getUserInput(e)}/>
                <button onClick={this.updateAffirmations}>Add</button>
                <button onClick={this.deleteAffirmations}>Delete</button>
                <button onClick={this.updateInstructionsState}>Next</button>
                {this.state.affirmations.map(affirmation => <p>{affirmation}</p>)}
            </section>
            </>
            
        );
    }
}  

export default PositiveAffirmations;