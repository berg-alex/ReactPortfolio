import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { motion } from "framer-motion";
// import styled from 'styled-components';
import MyComponent from './components/FramerMotion';
import Mynav from './components/myNav';
import {Container, Col, Row } from 'react-bootstrap';
import './App.css';
import './me.jpg';
// import {index} from './index';


 
class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div class='myText'>
             
              <Mynav/> <span>React Project</span>
          
            </div>
          </Col>
        </Row>
        <Row class='main'>
          <Col>
            <motion.div class='main-center'
            transition={{ originX:0, repeat:Infinity, repeatDelay: 1, duration:1 }}
            animate = {{rotateY:360}}
      

    ><Image src="https://i.ibb.co/vBcmkM0/me.jpg" roundedCircle z-index='10'/></motion.div> 
              
            
          </Col>
          <Col>
            
            <div class='myText' id='bodyText'> 
              This is a variation of my portfolio using react-bootstrap and Framer Motion. It'll be better than my main portfolio at www.alexberg.app when it's finished. The intention is to show a variety of skills vs a large quantity of a few skills.
            </div>
            <div class='mySkills'>

            </div>

          </Col>
          <Col>
            
            {/*<div.example-container/>*/}
    
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;