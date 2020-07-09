import React, { Component } from "react";
import styles from "./NavigationBar.module.scss";

import logo from "../../../assets/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from '@reach/router'

import styled from "styled-components";
import { animated } from "react-spring";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CollapseMenu from "../CollapseMenu/CollapseMenu";

class NavigationBar extends Component {
    state = {
      navbarOpen: false
  }

  handleNavbar = () => {
      this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() { 
  return (
<>        
    <nav>
      <a href="/">
          <img src={logo} alt="sheep logo"/>
      </a>
    <FlexContainer>
        <NavLinks>
            <div className={styles.links}>
            <Link to="/dashboard"><p><span><FontAwesomeIcon icon="tachometer-alt"></FontAwesomeIcon></span>Dashboard</p></Link>
            <Link to="/topics"><p><span><FontAwesomeIcon icon="comments"></FontAwesomeIcon></span>Topics</p></Link>
            <Link to="/tools"><p><span><FontAwesomeIcon icon="wrench"></FontAwesomeIcon></span>Toolbox</p></Link>
            </div>
            <div className={styles.account}>
            <Link to="/myaccount"> <p><span><FontAwesomeIcon icon="user"></FontAwesomeIcon></span>My Account</p></Link>
            </div> 
        </NavLinks>  
    </FlexContainer> 
            <BurgerWrapper>
              <BurgerMenu handleNavbar={this.handleNavbar}/>       
            </BurgerWrapper>
        </nav>
            <CollapseMenu handleNavbar={this.handleNavbar} navbarState={this.state.navbarOpen}/> 
    </>
  );
  }
}
  
export default NavigationBar;


const FlexContainer = styled.div` 
  display: flex;
  margin: auto;
  padding: 0 2rem;
  width: 100%;
`;

const NavLinks = styled(animated.ul)`
  width: 100%;
  display: flex;
  
  & p {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 768px) {
    display: none;
  }
`;