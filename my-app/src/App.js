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
      

    ><Image src="https://media-exp1.licdn.com/dms/image/C4D03AQHHtCg96ikUyQ/profile-displayphoto-shrink_400_400/0/1619643609555?e=1628121600&v=beta&t=Wrs5ACDZ37BV1I-DpPPFTui-waLyXy3PxXn56TRmkZ4" roundedCircle /></motion.div> 
              
            
          </Col>
          <Col>
            
            <div class='myText' id='bodyText'> 
              This is a variation of my portfolio using react-bootstrap and Framer Motion.
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