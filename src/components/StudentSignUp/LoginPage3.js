import '../../App.css';
import React from 'react';
import {Form, Col, Row, FloatingLabel, Button, Image, Modal} from 'react-bootstrap/';
import logo from '../../images/logo.svg'
import profilePic from '../../images/ProfileImage2.svg'
import pic from '../../images/signIn_Pic_background.png'

export function LoginPage3(props){
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
             <Col sm={8} md={8} lg={8}>
                <form>
                  <div style={{padding:50}}> 
         <Row>
            <Col>
                <h5>Step <span style={{color:'#FEDE00'}}><strong>3</strong></span> from 4</h5>    
            </Col>   
            <Col>
                <img style={{width:50,height:50,marginBottom:30}} src="https://camilita.com/wp-content/uploads/2021/01/Play-Icon-Logo-4.svg" />
            </Col>
         </Row>
                <h2 className="mb-5 mt-5">Opportunity time</h2>
                <p className="mb-5 mt-5">We would like to know what type of opportunities you are looking
                     we will contact you asap when they became available.</p>

         <Row>
            <Col md={3} sm={12}>    
                 <Form.Check type="checkbox" label="I am in school" />
            </Col>

            <Col lg={5} md={12} sm={12}>    
                <Form.Check type="checkbox" label="I am in sixth form/College" />
            </Col>
            <Col md={12} sm={12} xs={12} lg={4}>    
                <Form.Check type="checkbox" label="I am undergraduate" />
            </Col>

         </Row>
            <br/>
         <Row>
            <Col>    
                <Form.Check type="checkbox" label="Internship" />
            </Col>
            <Col>    
                <Form.Check type="checkbox" label="I am graduate" />
            </Col>
            <Col>    
                <Form.Check type="checkbox" label="I am postgraduate" />
            </Col>
         </Row>
            <br/>
         <Row>
            <Col md={6}>    
                <Form.Check type="checkbox" label="I am employed but I'm looking for a new job" />
            </Col>

            <Col md={6}>    
                <Form.Check type="checkbox" label="I left school at 16 and I am looking for a job" />
            </Col>

          </Row>
        <br/>

          <Row>     
            <Col sm={5} xs={5} md={4} lg={2}>
                <Button variant="light"  onClick={props.backStep}>Back</Button>    
            </Col>
            <Col  sm={6} xs={6} md={6} lg={6}>
                <Button variant="warning"  onClick={props.nextStep}>Continue</Button>    
            </Col>
          </Row>
            </div>
        </form>
    </Col>
 </Row>
    </div>);
}