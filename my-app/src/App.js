import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { motion } from "framer-motion";
// import styled from 'styled-components';
import MyComponent from './components/FramerMotion';
import Mynav from './components/myNav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MyProgressBar from './components/myProgressBar';
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
             
              <Mynav/> <span className='myTitle'>React Project</span>
          
            </div>
          </Col>
        </Row>

        <Row class='main'>
          <Col>
           
              <div class='myText' id='bodyText'> 
                This is a variation of my portfolio using react-bootstrap and Framer Motion. It'll be better than my main portfolio at <span className='webLink'>www.alexberg.app</span> when it's finished. The intention is to show a variety of skills vs a large quantity of a few skills.
              </div>
            
          </Col>
          
            <Col>
               <motion.div class='main-center'
            transition={{ originX:0, repeat:Infinity, repeatDelay: 1, duration:1 }}
            animate = {{rotateY:360}}
      
            ><Image src="https://i.ibb.co/vBcmkM0/me.jpg" roundedCircle z-index='10'/></motion.div> 
            </Col>
          
          <Col style={{textAlign: 'center', color: 'white', top: '20vh'}}>
            <div className='skillsList'>  
            <p>React.js</p>
            <p>Web Design</p>
            <p>Figma</p>
            <p>Framer</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            </div>
          </Col>

          <Col>
            <MyProgressBar/>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;