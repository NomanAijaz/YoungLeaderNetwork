import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg'
import connect from '../images/connect.svg'
import Brand from '../images/brand.svg'
import box from '../images/box.svg'
import {Footer} from './Footer'
import Role from '../images/RoleVisability.svg'
import clockIcon from '../images/checkmark.svg';
import FreeVersion from '../images/FreeVersion.png'
import backGroundImg from '../images/Rectangle.svg'
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';

export function Advertise(){
    return (<div>
        
         <div className="navRectangle">
			<Navbar className="p-3 " style={{backgroundColor:'white'}} expand="lg">
  			<img className="ms-5" src={logo} />
  			<Navbar.Toggle aria-controls="navbarScroll" />
  			<Navbar.Collapse id="navbarScroll">
    			<Nav
     	 			className="mr-auto my-2 my-lg-0"
     	 			style={{ maxHeight: '100px' }}
		 			navbarScroll>

			      <Nav.Link href="#" className="ms-5">Home</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >About us</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >Post A Job</Nav.Link>
                  <Nav.Link href="#" className="ms-5">Student</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >Advertise with us</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >Posting A Job/Event</Nav.Link>

                  <Button variant="light" className="ms-5">Login/Sign Up</Button>
                  <Button variant="warning" className="ms-5">Scheduale a Call</Button>

    			</Nav>      		
  			</Navbar.Collapse>
			</Navbar>
		</div>

        <div className ="w-100">
        <img className ="w-100 position-absolute" src={backGroundImg} />
        <Container className="position-relative" >
            <Row>
                <Col style={{paddingTop:100}} sm={2} xs={2} md={5} lg={5}>
                <h6><strong>Share an Opportunity</strong></h6><br/>
                <img style={{height:20, weigth:20}} src={clockIcon} /><label className="ms-3 ">A fifth of UK university sudents and 1 in 3 final year student use us</label><br/>
                <img style={{height:20, weigth:20}} src={clockIcon} /><label className="ms-3 mb-1">See recommended people and applicants in one place for every job</label><br/>
                <img style={{height:20, weigth:20}} src={clockIcon} /><label className="ms-3 mb-3">One month to create post your job ad</label><br/>


                <Container>
                    <Row>
                    <p>Post a 14 day job post for</p><br />
                        <Col><label style={{fontSize:30}}><strong >£399</strong></label>                         
                         <div class="btn-group ms-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-warning">-</button>
                            <button type="button" className="btn btn-light ms-1" style={{border:1, borderColor:'#808080', borderStyle:'solid', borderRadius:5}}>1</button>
                            <button type="button" className="btn btn-warning ms-1">+</button>
                         </div><br/>
                        <Button className="w-50 btn-warning mt-3">Purchase Now</Button>
                        </Col>
                    </Row>
                </Container>

                
                
                </Col>
                <Col sm={4} xs={4} md={7} lg={7}><img src={FreeVersion} className="img-fluid" alt="Responsive image"/></Col>
            </Row>
        </Container>
        </div>

        <div className="text-center mt-md-5" >
			<h3 style={{marginTop:200}}>What's in the package</h3>
		</div>

		<Container className="text-center mt-5">
  			<Row className="justify-content-md-center">
    			<Col sm={3} xs={3} md={5} lg={2}>
				<Card className="text-center" style={{border:0}}>
  						<Card.Body>
							<img className="mb-2" src={Role}/>
                            <h6>Role Visability</h6>
							 <Card.Text>
								 With you diverse talent
  							 </Card.Text>
  						</Card.Body>
					</Card>
			
				</Col>

    			<Col sm={3} xs={3} md={5} lg={2}>
				<Card className="text-center" style={{border:0}}>
  						<Card.Body>
							<img className="mb-2" src={Brand}/>
                            <h6>Company Branding</h6>
							 <Card.Text>
								Great Brand Exposer
  							 </Card.Text>
  						</Card.Body>
					</Card>
			
				</Col>

    			<Col sm={3} xs={3} md={5} lg={2}>
				<Card className="text-center" style={{border:0}}>
  						<Card.Body>
							<img className="mb-2" src={box}/>
                            <h6>Find Local Young Leaders</h6>
							 <Card.Text>
								 Hire young leaders who are ready to kick-start their career
  							 </Card.Text>
  						</Card.Body>
					</Card>
			
				</Col>
		  </Row>
		</Container>

        <div className="navRectangle">

        
        <Container>
                    <Row className="justify-content-md-center">
  
                        <Col sm={3} xs={3} md={7} lg={3}>
                        <p>Post a 14 day job post for</p>   
                         <label style={{fontSize:30}}><strong >£399</strong></label>                         
                         <div class="btn-group ms-5 mb-1" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-warning">-</button>
                            <button type="button" className="btn btn-light ms-1" style={{border:1, borderColor:'#808080', borderStyle:'solid', borderRadius:5}}>1</button>
                            <button type="button" className="btn btn-warning ms-1">+</button>
                         </div>
                        </Col>
                        <Col sm={2} xs={2} md={2} lg={2}>
                        <Button className=" btn-warning mt-3">Purchase Now</Button>
                        </Col>
                    </Row>
                </Container>

        </div>
        <br />
        <Footer />

    </div>);
}