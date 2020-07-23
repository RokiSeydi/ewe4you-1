import React, { Component } from 'react';
import styles from "./SmallButton.module.scss"

class SmallButton extends Component {
    state = {  }
    render() { 
        return (
        <button className={styles.button}>{this.props.text}</button>
        )
    }
}
 
export default SmallButton;