import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import { motion } from "framer-motion";
// import styled from 'styled-components';
import MyComponent from './components/FramerMotion';
import Mynav from './components/myNav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MyProgressBar from './components/myProgressBar';
import {Container, Col, Row } from 'react-bootstrap';
import * as LottiePlayer from "@lottiefiles/lottie-player";
import './App.css';
import './me.jpg';
// import {index} from './index';
// import myPDF from './components/downloadPDF';
import Iframe from 'react-iframe';
import FigmaEmbed from 'react-figma-embed';





 
class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div class='myText'>
             
              <Mynav/> <span className='myTitle'>React Project</span><p style={{color: 'white', float:'right', position: 'relative', top: '-5vh', left: '-5vw'}}>Email: abergsf2017@gmail.com</p>
              <a className='Linkedin' href='https://www.linkedin.com/in/alex-b-6676551b7/'>
                <lottie-player id='linkedinAnimation'
                  autoplay
                  loop
                  mode="normal"
                  src="https://assets9.lottiefiles.com/packages/lf20_pWLTA9.json"
                ></lottie-player>
              </a>
              <p style={{color: 'white', float: 'left', position: 'relative', left: '2vw'}}>(Preferred contact)</p>
                

              
            </div>
          </Col>
        </Row>

        <Row class='main'>
          <Col>
           
              <div class='myText' id='bodyText'> 
                This is a variation of my portfolio using react-bootstrap, Framer Motion, and Figma. The intention is to show a variety of skills vs a large quantity of a few skills. 
              </div>
                
            
          </Col>
          
            <Col>
               <motion.div class='main-center'
            transition={{ originX:0, repeat:Infinity, repeatDelay: 1, duration:1 }}
            animate = {{rotateY:360}}
      
            ><Image src="https://i.ibb.co/vBcmkM0/me.jpg" roundedCircle z-index='10'/></motion.div> 
              {/*<myPDF/>*/}

  
              <FigmaEmbed className='figma' style={{opacity: '60%', position: 'relative', left: '5vw', top: '-40vh', width: '500px', height:'600px'}} url="https://www.figma.com/proto/jqnpF0KXQR3tshwO7qv4Zf/aceUpSleeve?page-id=0%3A1&node-id=119%3A127&viewport=16%2C455%2C0.5&scaling=scale-down" />
              
            </Col>
          
          <Col style={{textAlign: 'center', color: 'white', top: '20vh', left: '5vw'}}>
            <div className='skillsList'>  
            <p>React.js</p>
            <p>Web Design</p>
            <p>Figma</p>
            <p>Framer</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            </div>
          </Col>

          <Col style={{position: 'relative', left: '10vw'}}>
            <MyProgressBar/>
          </Col>
          <Col>
            <a download href="AlexBergResumePDF.pdf" style={{position: 'relative', left: '-5vw'}}>
              Download Resume
            </a>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    );
  }
}
 
export default App;