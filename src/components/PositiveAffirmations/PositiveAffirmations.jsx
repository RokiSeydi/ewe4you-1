import React, { Component } from 'react';
import styles from "./PositiveAffirmations.module.scss";

class PositiveAffirmations extends Component {
    state = {
        userInput: "",
    }
    
    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

  UserText = () => {
    alert('lets hope this works')
  }

    render() { 
        return ( 
            <>
            <h1>Positive Affirmations</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ipsum obcaecati, nam, soluta ipsam fugit magni commodi facilis qui deleniti facere dolorem alias, natus repellat ut tempore consequatur rerum. Quae.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur fugiat voluptates quidem dolor magni! Quibusdam ea aperiam dolores, autem, aliquid et quia blanditiis cumque harum ab nobis hic veritatis provident!
                </p>
            <section className={styles.toolPage}>
                <input type="text" onChange={this.handleChange}/>
                <p>{this.handleChange}</p>
                <button onClick={e => this.handleChange(e)}>Next steps...</button>
                <p></p>
            </section>
            </>
            
        );
    }
}  

export default PositiveAffirmations;