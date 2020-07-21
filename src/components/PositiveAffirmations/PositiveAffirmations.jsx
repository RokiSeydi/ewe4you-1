import React, { Component } from "react";
import styles from "./PositiveAffirmations.module.scss";
import { firestore } from "../../firebase.js";

class PositiveAffirmations extends Component {
    state = {
        affirmations: [],
        userInput: "",
        showInstructions: false,
    }

    addToDatabase = () => {
        firestore
            .collection("affirmations")
            .doc(this.props.user.uid)
            .set({ affirmations: this.state.affirmations })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        firestore
            .collection("affirmations")
            .doc(this.props.user.uid)
            .get()
            .then((doc) => {
                const savedAffirmations = doc.data().affirmations;
                this.setState({ affirmations: savedAffirmations });
            })
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
        })
    }

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
                <section className={styles.header}>.
            <h1>Positive Affirmations</h1>
                    {this.state.showIntructions || this.state.affirmations.length > 2 ? <p className={styles.showInstructionsStyle}> Great! Now that you've got these positive affirmations, repeat these 3 times to yourself in a mirror
               You will help create a more positive narrative about yourself if you do this regularly. It will also help to create a more flexible and healthy view of yourself. </p> : ""}
                </section>
                <section className={styles.toolPage}>
                    <p>Please add 3 - 5 affirmations about yourself or your life.</p>
                    <input type="text" onInput={(e) => this.getUserInput(e)} />
                    <button onClick={this.updateAffirmations}>Add</button>
                    <button onClick={this.deleteAffirmations}>Delete</button>
                    <button onClick={this.addToDatabase}>Save</button>
                    {this.state.affirmations.map(affirmation => <p>{affirmation}</p>)}
                </section>
            </>

        );
    }
}

export default PositiveAffirmations;
