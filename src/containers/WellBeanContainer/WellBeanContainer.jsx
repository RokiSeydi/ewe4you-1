import React, { Component } from "react";
import WellBean from "../../components/WellBean";
import styles from "./WellBeanContainer.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Button from "../../components/Button/Button";
import { Link } from '@reach/router';

class WellBeanContainer extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className={styles.Flexed}>
          <div className ={styles.container}>
            <div className={styles.outer}>
                  <h1>{"Well Bean"}</h1>  
              <div className={styles.inner}>
                  <WellBean />
                <div >
                    <Link to="/topic-overview">
                      <Button text={"Overview"}/>
                    </Link>
                    <Link to="/topic-conclusion">
                      <Button text={"Conclusion"}/>
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
