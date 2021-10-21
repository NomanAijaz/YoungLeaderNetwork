import React from "react";
import '../App.css'
import reactDom from "react-dom";
import {Row,Col, Container,Form,Button} from 'react-bootstrap';
import pic1 from '../images/africanMan_home.png';
import pic2 from '../images/Onethousand.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png'
import logo4 from '../images/2.png'
import group6 from '../images/Group 12.png'
import { Navbar, Nav} from 'react-bootstrap';
import checkIcon from '../images/verified.svg'
import logo from '../images/logo.svg'
import {Footer} from './Footer'
import icon1 from '../images/sturev7.ceaf8410 (1).svg'
import icon2 from '../images/download.svg'
import icon3 from '../images/sturev8.c89695c6.svg'
import { Link } from "react-router-dom";
import stars from '../images/Group 6.svg'
import fb from '../images/fb.svg'
import linkedin from '../images/linkedin.svg'
import insta from '../images/insta.svg'
import girl from '../images/africanman.svg'
import backgroundP1 from '../images/Group 15.svg'


import checkMark from '../images/check mark.svg'
import icon6 from '../images/africanman.svg'
import leftbg from '../images/leftbg.svg'

import '../css/Home.css'


export function Home(props){
    return(
<>

    <div>
    <div className="grad">

    <div>
			<Navbar className="p-3"   expand="lg">
  			<img className="ms-5" src={logo} />
  			<Navbar.Toggle aria-controls="navbarScroll" />
    			<Navbar.Collapse id="navbarScroll">
          	<Nav
     	 		  	className="mr-auto my-2 my-lg-0"
     	 			  style={{ maxHeight: '100px' }}
		 		  	  navbarScroll>
     
                <Nav.Link href="" className="ms-5"> <Link class="nav-link" to='/about'>
			             About us
                </Link></Nav.Link>
  
                
      			        <Nav.Link href="" className="ms-5" >
                    <Link class="nav-link" to='/getJob'>Get A Job
                    </Link></Nav.Link>

                <Link class="nav-link" to='/employer'>
      			        <Nav.Link href="" className="ms-5" >Employer</Nav.Link>
                </Link>

              <div style={{marginLeft:200, marginTop:10}}>
                  <Button variant="warning"  className="ms-5"  onClick ={props.changeModalState}>Become A members</Button>
                  <Button variant="light" className="ms-5" onClick={props.changeModalStateSignIn}>Login</Button>
              </div>

    			</Nav>      		
  			</Navbar.Collapse>
			</Navbar>
		</div>



 

    <Container>
  <Row>
    <Col>
    <img className="w-75 h-80 pt-4  mt-5" src={pic2}/>
    <h6 className="mt-5">subscribe to our newsletter and never miss a job event</h6>

    <Row>
        <Col>
      <Form.Control className="mt-3 h-75 w-100" size="lg" type="text" placeholder="enter your email...." />
    </Col>
        <Col>  
        <Button className="mt-3 w-95 h-75" variant="warning">Subscribe</Button>{' '}
        </Col>
    </Row>
    </Col>
    <Col> 
    <img className="w-75 h-100 offset-1" src={pic1}/>
 
    </Col>
  </Row>
 
</Container>

    </div>
    <br/>
<div className="offset-2">
<Container>
    <h1 style={{ fontFamily:"impact"}}>WE HAVE CONNECTED THESE COMPANIES</h1>
    <h5>with our <span style={{color:"#FFC72B"}}>#Youngleaders</span></h5>
</Container>
<Container className="mt-3 mb-3">
  <Row>
<Col className="">
<img className="w-30 h-60" style={{opacity:"1"}} src={logo1}/>
</Col>
<Col>
<img className="w-30 h-75" src={logo2}/>
</Col>
<Col>
<img className="w-30 h-75" src={logo3}/>
</Col>
    </Row>
  </Container>
</div>
  

  <img  style={{position:'absolute'}} src={backgroundP1}/>
  <Container >
  <div className="mt-5">
  <h1 style={{ fontFamily:"impact"}}>Why The  <span style={{color:"#FFC72B", fontFamily:"impact"}}>Young Leaders Network?</span></h1>

  </div>
  </Container>
  <br/>
  <Container className="position-relative" >
      <Row>
        <Col xs={4}>
        <Row className="shadow  w-20" style={{maxWidth:"296px", maxHeight:"200"}}>
          <Col xs={3}>
          <img className="personpic1"  src={icon1} />
          </Col>
          <Col className="offset-1 mt-3" >
          <Row>
          <h4  className="name1" ><strong>Victoria</strong></h4>
          </Row>
          <Row>
         <Col xs={1}>
         <img src={checkIcon} />
         </Col>
         <Col>
         <p  style={{marginLeft:"3",fontSize:"10"}}>Verified Leader</p>
         </Col>
          </Row>
          </Col>
        </Row>
        <br/>
        <Row className="shadow  w-20 bg-light" style={{maxWidth:"296px", maxHeight:"200"}}>
          <Col xs={3}>
          <img className="personpic1"  src={icon2} />
          </Col>
          <Col className="offset-1 mt-3" >
          <Row>
          <h4  className="name1" ><strong>Kelvin</strong></h4>
          </Row>
          <Row>
         <Col xs={1}>
         <img src={checkIcon} />
         </Col>
         <Col>
         <p  style={{marginLeft:"3",fontSize:"10"}}>Verified Leader</p>
         </Col>
          </Row>
          </Col>
        </Row>
        <br/>
        <Row className="shadow  w-20 bg-light" style={{maxWidth:"296px", maxHeight:"200"}}>
          <Col xs={3}>
          <img className="personpic1"  src={icon3} />
          </Col>
          <Col className="offset-1 mt-3" >
          <Row>
          <h4  className="name1" ><strong>Sarah</strong></h4>
          </Row>
          <Row>
         <Col xs={1}>
         <img src={checkIcon} />
         </Col>
         <Col>
         <p  style={{marginLeft:"3",fontSize:"10"}}>Verified Leader</p>
         </Col>
          </Row>
          </Col>
        </Row>
        <br/>
       
        </Col>
        <Col>
        <img  src={stars} />

<h2><br />
   You could have a one-topic paragraph<br/>
   describing Venus or a one-topic paragraph<br/>
   describing the colours of a sunset<br/><br/>
   You could have a one-topic paragraph<br/>
   describing Venus or a one-topic paragraph<br/>
   describing the colours of a sunset
</h2>
        </Col>
        </Row>
    </Container>
 


  </div>
  <div  >
      <Row>
      <Col style={{marginTop:50}}>
      <img  className="logo4 img-fluid max-width: 85% h-85 mt-5"   src={logo4} style={{marginLeft:"-100px"}}/>
      </Col>
      <Col>
      <div className="mt-5">
      <h2 style={{fontFamily:'Impact'}} className="mt-5">OUR COUMMUNITY OF</h2>
      <h1 style={{color:"#FFC72B", fontFamily:"impact",maxHeight:"200px", fontSize:"100px"}} className="w-55" > 60,000</h1>
</div>

<Row className="w-100">
        <Col xs={4} className="mt-4 text-xs-mt-0" style={{}}><strong>changemakers who follow us on</strong></Col>
        <Col xs={2} ><img className="fb w-75" src={fb}/></Col>
        <Col xs={2}><img className="linkedin w-75"  src={linkedin}/></Col>
        <Col xs={2}><img className="insta w-75"  src={insta}/></Col>
        <Col xs={2}  className="includes mt-4 w-75s"><strong>Includes:</strong></Col>
      </Row>
      
      <Row>
        <Col xs={5}>
        <div className="shadow text-center mt-5  " style={{height:200,maxHeight:300,maxWidth:400}}>
            <img style={{height:68, width:68, marginBottom:10, marginTop:-30}} src={checkMark}/>
            <p className=""><strong>Black & Other <br/>Under represented Young<br/>pioneer across the UK</strong></p>
          
        </div>
        </Col>
        <Col xs={5}>
              <div className="shadow text-center mt-5 " style={{height:200,maxHeight:300,maxWidth:400}}>
            <img className=" " style={{ marginTop:-30}} src={checkMark}/>
            <p><strong>16-36 years old actively<br /> looking to kick start their <br/> career or make their next<br />move</strong></p>
            
            </div>
        </Col>
      
      </Row>
      <Row>
      <Col xs={5} >
        <div className="shadow text-center mt-5 offset-1" style={{height:200}}>
            <img style={{height:68, width:68, marginBottom:10, marginTop:-30}} src={checkMark}/>
            <p><strong>60% young women who<br/>want to work in STEM</strong></p>

          
        </div>
        </Col>
        <Col xs={5}>
              <div className="shadow text-center mt-5" style={{height:200}}>
            <img style={{height:68, width:68, marginTop:-30}} src={checkMark}/>
            <p><strong>School leavers excited<br/>about apprenticeships</strong></p>
            
            </div>
        </Col>
      </Row>
      </Col>
      </Row>
      </div>
      <Container className="mt-5 text-center" style={{marginTop:50}} >
      <Col >
      <img className=" img-fluid max-width: 85%"  src={group6}/>
      </Col>
      
      </Container>
      
      <div className="text-center mt-5 w-100 mb-5">
      <Button style={{  width:250, height:100, borderRadius:20}} className="btn btn-light ">Young Leaders</Button>
      <Button style={{borderRadius:15,marginLeft:0, width:250, height:100, opacity:0.7}} className="btn btn-warning">Employers</Button>
      </div>
<div>      
            <img className="img-fluid  w-75 position-absolute imgPosition"   src={leftbg}/>
            <img  className="img-fluid w-50" style={{float:'right'}}  src={girl} />

            <div className="p-5 w-75" style={{ position:'relative', marginLeft:70}}>
                <h1><strong className="par">YOUNG LEADERS</strong></h1><br/>
                <p className="par">
                The Young Leaders Network was absolutely incredible in providing me with the
                amazing opportunity for a legal internship within a matter of days. Creating a
                profile that would attract other employers was very straightforward, and they were
                proactive in informing me of opportunities that I was most suited for.<br/><br/>
                    
                    
                They were extremely supportive and friendly, encouraging me in every step of the
                application process. I would definitely recommend The Young Leaders Network to
                anyone who is keen to get a job, an internship or any form of a role within an industry;
                The Young Leaders Network is the way to go!<br/>
                </p>
                <button className="btn btn-light" ><strong>Join the community</strong></button>
              </div>



          </div>

<div style={{marginTop:300}}>
<Footer />
</div>
    </>
    )
}
