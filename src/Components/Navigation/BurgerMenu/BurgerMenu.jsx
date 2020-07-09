import React, { Component } from 'react';
import styled from "styled-components";

class BurgerMenu extends Component {
 
    render() { 
     return (
    <Wrapper onClick={this.props.handleNavbar}>
      <div>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
   );
 }
}   
   
export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  padding-right: 10px;
  cursor: pointer;
  display: block;
  // margin-left: 10px;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;


