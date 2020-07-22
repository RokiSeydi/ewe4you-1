import React, { Component } from 'react';
import styles from "./Button.module.scss";

class Button extends Component {

  render() { 
    const activeClass = this.props.isActive ? styles.active : "";
    return <button className={`${styles.button} ${activeClass}`} onClick={this.props.link} disabled={this.props.disabled}>{this.props.text}</button>;
  }
}

export default Button;