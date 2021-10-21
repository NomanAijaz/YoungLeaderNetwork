import '../App.css';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import React from 'react';
import cardLogo from '../images/logo1.svg';
import buildingIcon from '../images/placeholder.svg';
import locationIcon from '../images/location.svg';

export  function GetAJobDescriptionComponent(){
	return(<>
		<Card className="w-100" style={{marginTop:-40}}>
  						<Card.Header style={{height:150}}  size="lg"></Card.Header>
  							
  							<div>
  							<Col sm={4} xs={4} md={3} lg={3}><img size="lg" className="ms-3 w-50" style={{marginTop:-40}} src={cardLogo}/></Col>
  							</div>

  							<Card.Body className="ms-3">
    							<Card.Title>Sir. Noman Aijaz</Card.Title>
    							<br />
    							<Row md={12}>
								    <Col sm={3} xs={3} md={3} lg={3}><img src={buildingIcon} /><label className="ms-2">Building</label></Col>|
								    <Col sm={6} xs={6} md={6} lg={6}><img src={locationIcon} /><label className="ms-2">Sukkur</label></Col>
							    </Row>
							    <br />
							    <h5>Skills</h5>
    							
    							<Row md={12}>
								    <Col sm={2} xs={2} md={2} lg={2}><Button className="btn-light ">Sketch</Button></Col>
								    <Col sm={3} xs={3} md={3} lg={3}><Button className="btn-light ms-1">Photoshop</Button></Col>
								    <Col sm={3} xs={3} md={3} lg={3}><Button className="btn-light ms-3">Figma</Button></Col>
							    </Row>

							    <hr/>
							    <h5>Job Description</h5>
    								<Card.Text className="p-2">
    								A paragraph is a group of related sentences that support one main idea. 
    								In general, paragraphs consist of three parts: the topic sentence,
    								body sentences, and the concluding or the bridge sentence to the 
    								next paragraph or section.
    								A paragraph is a group of related sentences that support one main idea. 
    								In general, paragraphs consist of three parts: the topic sentence, body sentences, 
    								and the concluding or the bridge sentence to the next paragraph or section.<br />

    								</Card.Text>

    								<br />
    							<Row md={12}>
								    <Col sm={6} xs={6} md={6} lg={6}><h6 className="ms-2">Senority Level</h6></Col>
								    <Col sm={6} xs={6} md={6} lg={6}><h6 className="ms-2">Employement Type</h6></Col>
							    </Row>
							    
							    <Row md={12}>
								    <Col sm={6} xs={6} md={6} lg={6}><p className="ms-2">Associated</p></Col>
								    <Col sm={6} xs={6} md={6} lg={6}><p className="ms-2">Full-time</p></Col>
							    </Row>

							    <Row md={12}>
								    <Col sm={6} xs={6} md={6} lg={6}><p className="ms-2">Industory</p></Col>
								    <Col sm={6} xs={6} md={6} lg={6}><p className="ms-2">Job Functions</p></Col>
							    </Row>

  							</Card.Body>
					</Card>
					</>);
}