import React, { Component } from "react";
import WellBean from "../../components/WellBean";
import styles from "./WellBeanContainer.module.scss";
import NavigationBar from "../../components/Navigation/NavigationBar";
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
                <div>
                  <WellBean/>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/topic-overview">
                      Go Back
                    </Link>
                    <Link to="/topic-conclusion">
                      Topic Conclusion
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
