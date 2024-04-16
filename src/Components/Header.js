import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

export default function Header() {
 
  return (
    <>
    <Navbar className='navbarclass'>
        <Container>
        
          <Nav className='setlink'>
            <Link to="game" className='links'>- Typing Game - </Link>

          </Nav>
        </Container>

       
      </Navbar>
       
      
    </>
  )
}
