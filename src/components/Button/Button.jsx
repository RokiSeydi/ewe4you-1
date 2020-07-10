import React, { Component } from 'react';
import styles from "./Button.module.scss";

class Button extends Component {
  state = {  }
  render() { 
  return <a className={styles.button} href={this.props.link}>{this.props.text}</a>;
  }
}
 
export default Button;