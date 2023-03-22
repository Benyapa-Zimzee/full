import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar,Container, NavDropdown,Nav} from "react-bootstrap"

export default class Menubar extends Component {
  render() {
    return (
      <Navbar className="menu shadow-sm mb-3" sticky='top' expand="lg">
        <Container fluid>
          <Navbar.Brand href='/'>
            <img src='./images/logo.png' alt='' className='logo App-logo img-fluid'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <NavLink to="/" className='nav-link'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/about" className='nav-link'>About</NavLink>
                </li>
                <li>
                  <NavDropdown title="Manage Student" id="nav-link basic-nav-dropdown">
                    <NavDropdown.Item><NavLink to="/create-student" className='nav-drop'>Create New Student</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/student-list" className='nav-drop'>Student List</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink to="/student-card" className='nav-drop'>Student Card</NavLink></NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </Nav>
            <Nav>
              <Navbar.Text className='text-login'>
                Sign in as : Benyapa
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}
