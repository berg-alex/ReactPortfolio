import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

 
class Mynav extends Component {
  render() {
    return (
      <div>
         <Navbar id='nav' bg="" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://i.ibb.co/cJBdQmk/React-Bootstrap-Logo.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
      </div>
    );
  }
}
 
export default Mynav;


{/*<a href="https://imgbb.com/"><img src="https://i.ibb.co/cJBdQmk/React-Bootstrap-Logo.jpg" alt="React-Bootstrap-Logo" border="0"></a>*/}