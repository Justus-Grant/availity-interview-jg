import './Header.css'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import logo from './availity-logo-2.png'

export class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" className="nav">
        <Container>
            <Navbar.Brand className='head-logo' href="#home">
                <img
                src={logo}
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
          
        </Container>
      </Navbar>
    )
  }
}

export default Header