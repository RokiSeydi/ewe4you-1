import React, { Component } from "react";
import WellBean from "../../components/WellBean";
import styles from "./WellBeanContainer.module.scss";
import Button from "../../components/Button/Button";
import { Link } from '@reach/router';

class WellBeanContainer extends Component {
  render() {
    return (
      <>
        
        <div className={styles.Flexed}>
          <div className ={styles.container}>
            <div className={styles.outer}>
                  <h1>{"Well Bean"}</h1>  
              <div className={styles.inner}>
                  <WellBean user={this.props.user}/>
                <div className={styles.buttonContainer}>
                    <Link to="/topic-overview">
                      <Button text={"Overview"}/>
                    </Link>
                    <Link to="/topic-conclusion">
                      <Button text={"Topic Conclusion"}/>
                    </Link>
                  </div>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default WellBeanContainer;
