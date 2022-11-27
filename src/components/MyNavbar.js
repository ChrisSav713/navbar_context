import React, { useState, useEffect, useContext } from 'react'
import logo from '../logo.svg';
import '../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavContext } from '../App'

function MyNavbar() {
    const { name } = useContext(NavContext)

    useEffect(() => {
        document.getElementById("navSignIn").value = name;
    }, [name])

  return (
    <h1>hello</h1>
    // <Navbar bg="dark" variant="dark">
    //     <Container>
    //         <Navbar.Brand href="#home">
    //             <img
    //                 alt=""
    //                 src={logo}
    //                 width="30"
    //                 height="30"
    //                 className="d-inline-block align-top"
    //             />{' '}
    //             React Navbar
    //         </Navbar.Brand>
    //         <Nav className="me-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#features">Features</Nav.Link>
    //             <Nav.Link href="#about">Pricing</Nav.Link>
    //         </Nav>
    //         <Navbar.Text className="ml-auto">
    //             Signed in as: <a id="navSignIn" href="#login">{name}</a>
    //         </Navbar.Text>
    //     </Container>
    // </Navbar>
  )
}

export default Navbar