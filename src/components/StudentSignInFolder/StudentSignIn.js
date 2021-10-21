import '../../App.css';
import React from 'react';
import {Form, Col, Row, FloatingLabel, Button, Image, Modal} from 'react-bootstrap/';
import logo from '../../images/logo.svg'
import profilePic from '../../images/Group.svg'
import pic from '../../images/signIn_Pic_background.png'

export function StudentSignIn(){
    return(<div className="container">
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
                <Col>
                 <form>
                  <div style={{padding:50}}> 
                      <h2 className="mb-5 mt-5">Sign In</h2>       
                      <Row>
                         <Col sm={12} xs={12} md={12} lg={6}>
                             <p>Email Address</p>    
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Email Address"
                            className="mb-3">
                                 <Form.Control  name='email' type="email" placeholder="Email Address" />
                          </FloatingLabel>
                         </Col>
                         <Col sm={12} xs={12} md={12} lg={6}>
                         <p>Email Address</p>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Password"
                                className="mb-3">
                                    <Form.Control name = 'password' type="password" placeholder="Password" />
                            </FloatingLabel>
                            <p style={{float:'right'}}>Forget Password?</p>
                         </Col>
                       </Row>

                       <Row style={{marginTop:20}}>
                            <Col>    
                                <Form.Check type="checkbox" label="Agree with Terms and Services" />
                            </Col>
                       </Row>

                       <Row style={{marginTop:20}}>
                            <Col>    
                                <Form.Check type="checkbox" label="Remember my password" />
                            </Col>
                       </Row>
            
                        <Button variant="warning" style={{paddingLeft:45, paddingRight:45, marginTop:20}}>Sign In</Button> 
                            <h3 style={{marginTop:20, fontSize:15}}>do you have an account?<span style={{color:'#FEDE00'}}>Please Register</span></h3>
                    </div>
                </form>
            </Col>
        </Row>
    </div>);
}