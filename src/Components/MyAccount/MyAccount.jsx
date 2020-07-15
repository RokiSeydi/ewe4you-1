import React, { Component } from 'react';
import styles from './MyAccount.module.scss';
import { Link } from '@reach/router';
import NavigationBar from "../Navigation/NavigationBar";

class MyAccount extends Component {
  
  render() {
  
    return (
  <>
      <NavigationBar/>
     <section className={styles.body}>
        <h1>Page under construction!</h1>
        <div className={styles.link}>
        <Link to="/">Go back to the landing page</Link>
        </div>
      </section>
    </>  
    
    );
  }  
}


export default MyAccount;