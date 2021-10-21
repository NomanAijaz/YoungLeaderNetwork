import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg'
import connect from '../images/connect.svg'
import Brand from '../images/brand.svg'
import box from '../images/box.svg'
import {Footer} from './Footer'
import {JobAdvertiseComponent} from './JobAdvertiseComponent'
import {EventAdvertiseComponent} from './EventAdvertiseComponent'
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export function CreateACommonPageForPositng(){

	const[isChecked, setIsChecked] = React.useState(false);

        const onHandleChange =()=>{
            if(isChecked){
            setIsChecked(false);     
                      
            }
             else{
            setIsChecked(true);                    
             }

        }


    return(<div>
        
        <div className="navRectangle">
			<Navbar className="p-3 " style={{backgroundColor:'white'}} expand="lg">
  			<img className="ms-5" src={logo} />
  			<Navbar.Toggle aria-controls="navbarScroll" />
  			<Navbar.Collapse id="navbarScroll">
    			<Nav
     	 			className="mr-auto my-2 my-lg-0"
     	 			style={{ maxHeight: '100px' }}
		 			navbarScroll>

			      <Nav.Link href="#" className="ms-5">
				  <Link class="nav-link" to='/employer'>Home</Link>
				  </Nav.Link>

      			<Nav.Link href="" className="ms-5">
					   <Link class="nav-link" to='/about'>
			             About us
                </Link></Nav.Link>


      			  <Nav.Link className="ms-5" >
					<Link class="nav-link" to='/post'>Post A Job</Link>
					</Nav.Link>
                
				<Link class="nav-link" to='/'>
      			        <Nav.Link href="" className="ms-5" >Student</Nav.Link>
                </Link>


      			  <Nav.Link  className="ms-5" >
					<Link class="nav-link" to='/advertise'>Advertise with us</Link>
						</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >
					<Link class="nav-link" to='/post'>Posting A Job/Event</Link>
					</Nav.Link>

                  <Button variant="light" className="ms-5">Login/Sign Up</Button>
                  <Button variant="warning" className="ms-5">Scheduale a Call</Button>

    			</Nav>      		
  			</Navbar.Collapse>
			</Navbar>
		</div>


		<div className ="backGroundImg w-100">

		<div className="text-center">
			<p style={{fontSize:32, fontFamily:'HelveticaNeue-Medium'}} >Advertise your post to range of diverse young leaders who are ready to take on<br/> new opportunities</p>
			<p style={{fontSize:22, fontFamily:'HelveticaNeue-Medium'}} className="mt-3">We activily engaged with universities and schools across London keeping them up<br/> to date with new Opportunities we have going</p>

			

		</div>

		<Container>
  				<Row className="justify-content-md-center">
    				<Col md="auto">
						<div class="form-check form-switch ">
  							<input className="form-check-input" style={{color:'black'}} onClick={onHandleChange} type="checkbox" id="flexSwitchCheckChecked" />
  							<label className="form-check-label" for="flexSwitchCheckChecked">Job/Event</label>
						</div>
    				</Col>
    		    </Row>
		</Container>

		{/* //advertise	 */}
		

		{
            (function(){
                if(isChecked){
                   return <EventAdvertiseComponent />;
                }else{
                	return <JobAdvertiseComponent />;
                }
            })()
        }



		</div>

		<div className="text-center mt-md-5"  >
			<h3 style={{marginTop:100}}>Why Posting a Job with benefits you</h3>
		</div>

		<Container className="text-center mt-5">
  			<Row className="justify-content-md-center">
    			<Col sm={3} xs={3} md={5} lg={2}>
				<Card className="text-center" style={{border:0}}>
  						<Card.Body>
							<img className="mb-2" src={connect}/>
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
							 <Card.Text>
								 Hire young leaders who are ready to kick-start their career
  							 </Card.Text>
  						</Card.Body>
					</Card>
			
				</Col>
		  </Row>
		</Container>

		<div className="text-center mt-3">
			<h3>Millennial and GenZ targeted solutions</h3>
		</div>


		<Container className="text-center mt-5 mb-5">
  			<Row className="justify-content-md-center">
    			<Col sm={6} xs={6} md={5} lg={2}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Body className="bg-light">
							    <Card.Text>
									GenZ and Millennial D&I Research 
  								 </Card.Text>
								   <Button variant="warning" > Request a Call</Button>
  						</Card.Body>
					</Card>

				</Col>

				<Col sm={6} xs={6} md={5} lg={2}>
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Body className="bg-light">
							    <Card.Text>
								Bespoke branding Content
  								 </Card.Text>
								   <Button variant="warning" > Request a Call</Button>
  						</Card.Body>
					</Card>
				</Col>
				<Col sm={6} xs={6} md={5} lg={2}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Body className="bg-light">
							    <Card.Text>
								Special Media Campaign Strategy
  								 </Card.Text>
								 <Button variant="warning" > Request a Call</Button>
  						</Card.Body>
					</Card>

				</Col>
				<Col sm={6} xs={6} md={5} lg={2}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Body className="bg-light">
							    <Card.Text>
								Special Media Campaign Strategy
  								 </Card.Text>
								 <Button variant="warning" > Request a Call</Button>
  						</Card.Body>
					</Card>

				</Col>
				<Col sm={4} xs={4} md={5} lg={2}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Body className="bg-light">
							    <Card.Text>
								Special Media Campaign Strategy
  								 </Card.Text>
								 <Button variant="warning" > Request a Call</Button>
  						</Card.Body>
					</Card>

				</Col>
		  </Row>
		</Container>

		<Footer />

    </div>);
}