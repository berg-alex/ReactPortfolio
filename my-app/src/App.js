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


/*
    row1 = nav
    ***react bootstrap logo, react bootstrap text, email***


    

*/


 
class App extends Component {
  render() {
    return (
      <Container fluid>
      {/* Row ONE */}
        <Row className='row1'>
          <Mynav/>
        </Row>
         
         {/* Row TWO */}
        <Row className='row2'> 
          {/* Row 2 Col 1 mobile portrait */}
          <Col className='row2-col1'>
            <a className='Linkedin' href='https://www.linkedin.com/in/alex-b-6676551b7/'>
              <lottie-player id='linkedinAnimation'
                autoplay
                loop
                mode="normal"
                src="https://assets9.lottiefiles.com/packages/lf20_pWLTA9.json"
              ></lottie-player>
            </a>
            <p className='preferredContact' >(Preferred contact)</p>
          </Col>
          

          {/* Row 2 Col 2 mobile portrait */}
          
          <Col className='row2-col2'>
            <motion.div class='myImage'
              transition={{ originX:0, repeat:Infinity, repeatDelay: 1, duration:1 }}
              animate = {{rotateY:360}}
        
              ><Image src="https://i.ibb.co/vBcmkM0/me.jpg" roundedCircle z-index='10'/>
            </motion.div>
          </Col>


          {/* Row 2 Col 3 mobile portrait */}
          <Col className='row2-col3'>
            
          </Col>
        </Row>

          
        <Row className='row3'>
          <Col className='row3-col1'>
           
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjqnpF0KXQR3tshwO7qv4Zf%2FaceUpSleeve%3Fpage-id%3D0%253A1%26node-id%3D119%253A99%26viewport%3D-95%252C495%252C0.5%26scaling%3Dscale-down" allowfullscreen></iframe>
           
          </Col>
          
          <Col className='row3-col2'>
            <a className='downloadLink' download href="AlexBergResumePDF.pdf">
              Download Resume
            </a>
          </Col>
        </Row>
        
        <Row className='row4'>
          <Col className='row4-col1'>
            
          </Col>
        </Row>

        <Row className='row5'>
          <Col className='row5-col1'>
            <div className='skillsList'>  
              <p>HTML</p>
              <p>CSS</p>
              <p>Javasript</p>
              <p>React.js</p>
              <p>Figma</p>
              <p className='otherSkills'>Other skills listed on Linkedin profile</p>
            </div>
          </Col>
          <Col className='row5-col2'>
            <MyProgressBar/>
          </Col>
        </Row>

        <Row className='row6'>
          <Col className='row6-col1'>
            <p class='bodyText'> 
                Responsive on chrome dev tools (iphone 6/7/8, iphone X, iphone 12 pro, ipad, ipad pro, laptop), <span style={{color: 'skyblue', fontWeight: 'bold'}}>this may vary from physical devices. The solution is testing physical devices, but I don't have access to all of them.</span> <span style={{fontWeight: 'normal'}}>View on desktop/laptop for best results, mobile portrait should also work.</span>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;