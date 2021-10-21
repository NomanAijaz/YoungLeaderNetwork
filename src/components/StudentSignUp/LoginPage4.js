import '../../App.css';
import React from 'react';
import {Form, Col, Row, FloatingLabel, Button, Image, Modal} from 'react-bootstrap/';
import logo from '../../images/logo.svg'
import profilePic from '../../images/ProfileImage3.png'
import pic from '../../images/signIn_Pic_background.png'

export function LoginPage4(props){
    return (<div className="container">
                <Row className="">
                    <Col sm={4} style={{backgroundColor:'#f7f7f7'}} >
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
                              <Row>
                                    <Col>
                                        <h5>Step <span style={{color:'#FEDE00'}}><strong>4</strong></span> from 4</h5>    
                                    </Col>   
                                    <Col>
                                        <img style={{width:50,height:50,marginBottom:30}} src="https://camilita.com/wp-content/uploads/2021/01/Play-Icon-Logo-4.svg" />
                                    </Col>
                              </Row>

                              <h2 className="mb-5 mt-5"><strong>Congratulations</strong><br/>
                              <span style={{fontSize:25}}>we are now a member</span></h2>
                              <p>
                                  You could have a one-topic paragraph
                                  describing Venus or a one-topic paragraph
                                  describing the colours of a sunset 
                              </p>

                               <Row>
                                <Col>
                                        <Button variant="warning"  onClick={props.handleClick}>Close</Button>    
                                </Col>
                               </Row>
 
                            </div>
                        </form>
                    </Col>
                </Row>
    </div>);
}