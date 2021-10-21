import '../../App.css';
import React from 'react';
import {Form, Col, Row, FloatingLabel, Button, Image, Modal} from 'react-bootstrap/';
import logo from '../../images/logo.svg'
import profilePic from '../../images/ProfileImage2.svg'
import pic from '../../images/signIn_Pic_background.png'

export function LoginPage2(props){

    return (
        <div className="container">
      <Row className="">
      <Col sm={4} md={4} lg={4} style={{backgroundColor:'#f7f7f7'}} >
      <img  style={{width:100,height:50,marginLeft:20}} className='mt-3' src={logo}/>
      <p style={{margin:20}}>
        You could have a one-topic paragraph
        describing Venus or a one-topic paragraph
        describing the colours of a sunset
      </p>

      <div className="text-center mt-5">
      <Image style={{width:200,height:200, position:'absolute'}} src={profilePic}/>
      <Image style={{width:250,height:250, marginBottom:20}} src={pic}/>
      </div>
      </Col>
     
      <Col sm={8} xs={12} md={8} lg={8}>
      <form>
      <div style={{padding:50}}> 
      <Row>
        <Col>
         <h5>Step <span style={{color:'#FEDE00'}}><strong>2</strong></span> from 4</h5>    
        </Col>   
        <Col>
      <img style={{width:50,height:50,marginBottom:30}} src="https://camilita.com/wp-content/uploads/2021/01/Play-Icon-Logo-4.svg" /> 
        </Col>
      </Row>
      
      <h2 className="mb-5 mt-5">What is the best number to reach you on?</h2>
      <h4 className="mb-5 mt-5">We will only contact you when we have the opportunities <br/>you are looking for</h4>       
  <Row>
    <Col>    
    <FloatingLabel
    controlId="floatingInput"
    label="Phone Number"
    className="mb-3">
    <Form.Control  name='phoneNumber' type="text" placeholder="Phone number" />
    </FloatingLabel>
    </Col>
  </Row>

<Row>
    
    <Col sm={5} xs={5} md={4} lg={2} >
    <Button variant="light"  onClick = {props.backStep}>Back</Button>    
    </Col>

    <Col  sm={6} xs={6} md={6} lg={6} >
    <Button variant="warning"  onClick={props.nextStep}>Continue</Button>    
    </Col>
</Row>
 
      </div>
        </form>
        </Col>
        </Row>
    </div>

    );
}

