import React from "react";
import reactDom from "react-dom";
import {Row,Col, Container,Form,Button} from 'react-bootstrap';
import pic1 from '../images/africanMan_home.png';
import pic2 from '../images/Onethousand.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png'
import logo4 from '../images/Early Career Recruitment.svg'
import group6 from '../images/Group 12.png'
import employer from '../images/img-employer.png'

import '../EmployerHomePage.css';
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'


import { Navbar, Nav} from 'react-bootstrap';

import checkIcon from '../images/verified.svg'
import icon1 from '../images/sturev7.ceaf8410 (1).svg'
import icon2 from '../images/download.svg'
import icon3 from '../images/sturev8.c89695c6.svg'

import stars from '../images/Group 6.svg'
import fb from '../images/fb.svg'
import linkedin from '../images/linkedin.svg'
import insta from '../images/insta.svg'
import cuteBoy from '../images/Group 11.png'

import checkMark from '../images/check mark.svg'
import icon6 from '../images/africanman.svg'
import leftbg from '../images/leftbg.svg'

import logo5 from '../images/Industry Specific and Company Events.svg'
import logo6 from '../images/Research-1.svg'
import logo7 from '../images/D&I Consultation-1.svg'
import logo8 from '../images/Branding-1.svg'
import logo9 from '../images/General Recruitment-1.svg'

import { Footer } from "./Footer";




export function EmployerHomePage(props){
    return(
    <>




    <div className="">
    <div className="grad" style={{}} >


    <div>
			<Navbar className="p-3"   expand="lg">
  			<img className="ms-5" src={logo} />
  			<Navbar.Toggle aria-controls="navbarScroll" />
    			<Navbar.Collapse id="navbarScroll">
          	<Nav
     	 		  	className="mr-auto my-2 my-lg-0"
     	 			  style={{ maxHeight: '100px' }}
		 		  	  navbarScroll>

                <Nav.Link href="" className="ms-5"> <Link class="nav-link" to='/'>
			             Home
                </Link></Nav.Link>


                <Nav.Link href="" className="ms-5"> <Link class="nav-link" to='/about'>
			             About us
                </Link></Nav.Link>
  
                
      			        <Nav.Link href="" className="ms-5" >
                    <Link class="nav-link" to='/postJob'>Post A Job
                    </Link></Nav.Link>

                <Link class="nav-link" to='/employer'>
      			        <Nav.Link href="" className="ms-5" >Employer</Nav.Link>
                </Link>

              <div className="float-end">
                  <Link to="/SignUp"> <Button variant="warning"  className="ms-5" onClick ={props.changeModalState}>Become A members</Button></Link>
                  <Button variant="light" className="ms-5" onClick={props.changeModalStateSignIn}>Login</Button>
              </div>

    			</Nav>      		
  			</Navbar.Collapse>
			</Navbar>
		</div>


    <Container>
  <Row>
  <Col className="employee1"> 
    <img className="img-fluid max-width: 85%  h-80"  style={{marginLeft:-160}}src={employer}/>
 
    </Col>
    <Col className="ms-5 mt-5">
    <h1 className="mt-5" ><strong>The Young Leaders Network,<br/> connecting you with diversity Of </strong></h1>
 		 		<br/><h1 className="ylnheading1"><strong>THOUGHT, SKILL<br /> & LEADERSHIP. </strong></h1><br />
 		 		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Col>
   
  </Row>
 
</Container>

    </div>
    <br/>
  
    <Container className="text-center">
    <h1 style={{ fontFamily:"impact"}}>Our Success</h1>
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
  <div className="text-center">
  <Button className="mt-3 w-65 h-85 p-4" variant="warning" style={{width:300}}><strong>Set up a call</strong></Button>{' '}

    </div>
 
 
 <div className="backgroundofCuteBoy">
   <div>
     <Row>
 <Col sm={6}>
 
 </Col>
 <Col sm={6} className="mt-5">
 <Row className="w-100">
   <Row className="mt-5">
 <h2 className="mt-5"><strong style={{fontFamily:'Impact',maxHeight:"200px", fontSize:"50px"}}>OUR</strong></h2>
      <h1><strong style={{color:"#FFC72B", fontFamily:"impact",maxHeight:"200px", fontSize:"100px"}}>60,000</strong></h1>
      </Row>
      <Row>
        <Col xs={5} className=" text-xs-mt-0" style={{height:100, fontSize:35, fontFamily:""}}><strong>Young Leader who follow us on</strong></Col>
        <Col xs={2} ><img className="fb w-85 mt-5" src={fb}/></Col>
        <Col xs={1}><img className="linkedin w-85 mt-5"  src={linkedin}/></Col>
        <Col xs={2}><img className="insta w-85 mt-5"  src={insta}/></Col>
        <Col xs={2}  className="includes  w-65s mt-5" style={{height:100, fontSize:35, fontFamily:""}}><strong>Includes:</strong></Col>
        </Row>
      </Row>
 </Col>
 </Row>
 </div>

      
      

 <img  className="logo4 img-fluid max-width: 85% h-85 mt-5"   src={cuteBoy} style={{marginLeft:"-170px"}}/>
 </div>
 


  </div>
  
  <Container>
    <h1 className="text-center mb-5" style={{fontSize:70}}><strong>Our Services</strong></h1>
  <Row>
    <Col sm={6} xs={4} md={3}>

	<div>
	<div className="rectangle5" >
	<div className="text-center">
		<img src={logo4}/>
		<h5 className="mt-5">Early Career Recruitment</h5>
	</div>
	</div>
	</div>

    </Col>
    <Col sm={6} md={3}>

	<div>
	<div className="rectangle5" >
	<div className="text-center">
		<img src={logo9}/>
		<h5 className="mt-5">Branding</h5>
	</div>
	</div>
	</div>


    </Col>
    <Col sm={6} md={3}>

	<div>
	<div className="rectangle5" >
	<div className="text-center">
		<img src={logo6}/>
		<h5 className="mt-5">D&I Consultation</h5>
	</div>
	</div>
	</div>


    </Col>
    <Col sm={6} md={3}>

	<div>
	<div className="rectangle5 " >
	<div className="text-center">
		<img src={logo7}/>
		<h5 className="mt-5">General Recruitment</h5>
	</div>
	</div>
	</div>


    </Col>
  </Row>
<br/><br/>
<Row className="justify-content-md-center text-center" >
    <Col className="offset-3">
    
	<div>
	<div className="rectangle5" >
	<div className="text-center">
		<img src={logo8}/>
		<h5 className="mt-5">Research</h5>
	</div>
	</div>
	</div>

    </Col>

    <Col>
      
	<div>
	<div className="rectangle5" >
	<div className="text-center">
		<img src={logo5}/>
		<h5 className="mt-5">Industry Specific and<br/> Company Events</h5>
	</div>
	</div>
	</div>


    </Col>
  </Row>

</Container>

<br/>
<br/>
<Footer />

     
  
    </>
    )
}
