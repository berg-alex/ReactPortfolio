import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Col, Row } from 'react-bootstrap';

 
class Mynav extends Component {
  render() {
    return (
      <div>
        <Navbar id='nav' bg="" variant="dark">
          <Col className='row1-col1'>
          <Navbar.Brand>
            <img
              alt=""
              src="https://i.ibb.co/cJBdQmk/React-Bootstrap-Logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          </Col>
          <ul className='navText'>
            <Col className='row1-col2'> 
            <li className='myTitle'>React Project</li>
            </Col>
            <Col className='row1-col3'>
            <li className='myEmail'> Email: abergsf2017@gmail.com</li>
            </Col>
          </ul>
        </Navbar>
      </div>
    );
  }
}
 
export default Mynav;


{/*<a href="https://imgbb.com/"><img src="https://i.ibb.co/cJBdQmk/React-Bootstrap-Logo.jpg" alt="React-Bootstrap-Logo" border="0"></a>*/}