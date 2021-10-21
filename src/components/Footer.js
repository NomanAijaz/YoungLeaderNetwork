import fb3 from '../images/fb2.svg'
import linkedin3 from '../images/linkedin2.svg'
import insta3 from '../images/insta2.svg'
import twitter from '../images/twitter.svg'
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import { Navbar, Nav, Form } from 'react-bootstrap';


export function Footer(){
	return(<div>
			<div className="navRectangle">
			<Navbar className="p-3 " expand="lg">
  			<img className="ms-5" size="lg" src={logo} />
  			<Navbar.Toggle aria-controls="navbarScroll" />
  			<Navbar.Collapse id="navbarScroll">
    			<Nav
     	 			className="mr-auto my-2 my-lg-0"
     	 			style={{ maxHeight: '100px' }}
		 			navbarScroll>

			      <Nav.Link href="#" className="ms-5">Menu</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >Get A Job</Nav.Link>
      			  <Nav.Link href="#" className="ms-5" >Employer</Nav.Link>
    			</Nav>
      		
  			</Navbar.Collapse>
			

			<div>
				<Row>
										<Col>
										    <img src={insta3} />
										</Col>
										<Col>
											<img src={fb3} />
										</Col>
										<Col>
										 	<img src={linkedin3} />
				 						</Col>
										<Col>
											<img src={twitter} />
										</Col>
		        </Row>									 
			</div>
			</Navbar>
		</div>

		</div>);
}

