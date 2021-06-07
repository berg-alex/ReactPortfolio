import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


// import Button from 'react-bootstrap/Button';


 
class MyProgressBar extends Component {
  render() {
    return (
      <div className='allProgressBars'>
         <ProgressBar animated now={20} />
         <br/>
         <ProgressBar animated now={70} />
         <br/>
         <ProgressBar animated now={60} />
         <br/>
         <ProgressBar animated now={60} />
         <br/>
         <ProgressBar animated now={70} />
         <br/>
         <ProgressBar animated now={60} />
  
      </div>
    );
  }
}
 
export default MyProgressBar;