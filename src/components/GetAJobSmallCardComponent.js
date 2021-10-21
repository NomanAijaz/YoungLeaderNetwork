import '../App.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import React from 'react';
import cardLogo from '../images/logo1.svg';
import buildingIcon from '../images/placeholder.svg';
import locationIcon from '../images/location.svg';

export function GetAJobSmallCardComponent(props){
	return(<div className="card w-80 p-3" style={{borderRadius:10}}>
 				<div className="card-body">
					<Row>
					    <Col sm={4} xs={4} md={3} lg={3} style={{marginRight:-40}} ><img size="lg" className="w-50" src={cardLogo}/></Col>
   					    <Col sm={8} xs={8} md={6} lg={6}>
   							    <Row md={12}>
								    <Col sm={12} xs={12} md={12} lg={12}><h5 size="lg" >{props.name}</h5></Col>
							    </Row>
							    <Row md={12}>
								    <Col sm={7} xs={7} md={7} lg={7}><img src={buildingIcon} /><label>{props.building}</label></Col>
								    <Col sm={5} xs={5} md={5} lg={5}>|<img src={locationIcon} /><label>{props.city}</label></Col>
							    </Row>
							    	<br/>
							   <Row md={12}>
								    <Col sm={3} xs={3} md={3} lg={3}><Button className="btn-light ">{props.cat1}</Button></Col>
								    <Col sm={4} xs={4} md={4} lg={4}><Button className="btn-light ms-1">{props.cat2}</Button></Col>
								    <Col sm={3} xs={3} md={3} lg={3}><Button className="btn-light ms-3">{props.cat3}</Button></Col>
							    </Row>
   					    </Col>
                        <Col md={3} lg={3} className="d-none d-lg-block">{props.date}</Col>
                    </Row>
  				</div>
			</div>);	
}






