import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

 
class Mynav extends Component {
  render() {
    return (
      <div>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/ReactBootstrapLogo.jpeg"
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