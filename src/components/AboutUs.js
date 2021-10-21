import React from "react";

import {Row,Col, Container,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../EmployerHomePage.css';

import imgAboutUs from '../images/img-about us.png';

import { Navbar, Nav} from 'react-bootstrap';
import imagevalue from '../images/imagvalues.png'
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png'
import {Link} from 'react-router-dom';

import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'
import service4 from '../images/service4.png'
import service5 from '../images/service5.png'
import service6 from '../images/service6.png'
import logo from '../images/logo.svg'
import girl from '../images/6.png'
import leftbg from '../images/leftbg.svg'
import {Footer} from './Footer'

export function AboutUs(props){
    return(
    <>

<div  >
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
  
                <Link class="nav-link" to='/getJob'>
      			        <Nav.Link href="" className="ms-5" >Get A Job</Nav.Link>
                </Link>

                <Link class="nav-link" to='/employer'>
      			        <Nav.Link href="" className="ms-5" >Employer</Nav.Link>
                </Link>

              <div>
                  <Link to="/SignUp"> <Button variant="light"  className="ms-5" onClick ={props.changeModalState}>Login/Sign Up</Button></Link>
                  <Button variant="success" className="ms-5" onClick={props.changeModalStateSignIn}>Schedule A Call</Button>
              </div>

    			</Nav>      		
  			</Navbar.Collapse>
			</Navbar>
		</div>


      <div className="part2"  >
      
      <Row className="w-100" style={{marginTop: 500, position:'absolute'}} >
        <Col className="mt-5 offset-2" >
        
          
            <h1 className="mt-5 "><strong><b>About Us?</b></strong></h1><br/>
              <h3><strong>No this is about you</strong></h3>
              <br/>
              <br/>
              <p style={{fontSize:"30"}} className="text-sm-mb-5">
              We are in the business of serving. Serving the Young generation
<br /> to help them climb the stairwell to leadership & helping<br /> businesses diversify their workforce with the
<br /> best and the brightest Young Leaders. Every step we take is with you in mind.</p>
              
        
           
        
        </Col>
        <Col  >
        <img  className=" img-fluid max-width: 85% mt-3"  src={imgAboutUs}/>
        </Col>
      </Row>
     
      </div>
      <div>
        
        <Row>
          <Col className="offset-2">
<Container>

<h1 className="mt-4"><strong style={{fontSize:70, color: '#FFC72B', fontFamily:'Impact'}}>OUR VALUES</strong></h1>

<Row className="mt-5">
    <Col className="mt-3">
      <h4>Integrety</h4>
      <p className="our-young-leaders-ar">
      Our Young Leaders are at the heart of our mission.We are driven by the struggles they face being the underrepresented.
      </p>
    </Col>
    <Col className="mt-3">
      <h4>Forward Thinking</h4>
      <p className="our-young-leaders-ar">
    Prevention is better than cure - We want to stop the cycle of the old ways businesses hire talent. We are moving into a world where diversity can be your biggest asset.
      </p>
    </Col>
  </Row>
  <br/>
  <Row>
    <Col>
      <h4>Qualitative vs quantitative</h4>
      <p className="our-young-leaders-ar">
We make sure that our Young leaders are equipped with the skills and knowledge so that their… The number of companies we have worked with
      </p>
    </Col>
    <Col>
      <h4>we problem solve</h4>
      <p className="our-young-leaders-ar">
We add value to organisations by creating solutions to your challenges. A consultation with us will help you identify where you are going wrong and how you can implement change.
      </p>
    </Col>
  </Row>

          </Container>
          </Col>
          <Col>
          <img className="img-fluid max-width: 85%" src={imagevalue}/>
          </Col>
        </Row>
      </div>
      <div className="mt-5 text-center">
          <h2>Our Services</h2>
      </div>
   <div>
  <Row className="mt-4 text-center">
    <Col sm={12} md={4} lg={3} xl={2} >
    <img className="w-75" src={service1}/>
    </Col>
    <Col sm={12} md={4} lg={3} xl={2}>
    <img className="w-75" src={service2}/>
    </Col>
    <Col sm={12} md={4} lg={3} xl={2}>
    <img className="w-75" src={service3}/>
    </Col>
    <Col sm={12} md={4} lg={3} xl={2}>
    <img className="w-75" src={service4}/>
    </Col> 
    <Col sm={12} md={4} lg={3} xl={2}>
    <img className="w-75" src={service5}/>
    </Col>
    <Col sm={12} md={4} lg={3} xl={2}>
    <img className="w-75" src={service6}/>
    </Col>
  </Row>
  </div>

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
