import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class Navbar extends React.Component{
  render() {
      return (
         <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="#">
              Dashboard
            </NavItem>
            <NavItem href="#">
              Topics
            </NavItem>
            <NavItem href="#">
              Toolbox
            </NavItem>
            <NavItem href="#">
              My Account
            </NavItem>
          </Nav>
        </Navbar>
      );
  }
}