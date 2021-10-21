import '../App.css';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import React from 'react';
import cardLogo from '../images/logo1.svg';
import buildingIcon from '../images/placeholder.svg';
import locationIcon from '../images/location.svg';
import {GetAJobSmallCardComponent} from './GetAJobSmallCardComponent'
import {GetAJobDescriptionComponent} from './GetAJobDescriptionComponent'

export function GetJob(){
	return(<div>

		<div>
			<Container>
  				<Row>
    				<Col>
    				<label className="me-3">Sort By:</label>
    				<select className="p-1 w-25" id="Sorting" required >
                        <option value="latestToOldest">latest To Oldest</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
    				</Col>
  				</Row>
  			</Container>

  			<div>
  				<Container>
  				<Row className="mt-2">
  					
  					<Col>

  					<GetAJobSmallCardComponent name="Sr. UI/UX Designer" building="Cause Marketing" city="NewYork" cat1="Sketch" cat2="Photoshop" cat3="Figma" date="12/06/2020"/>	
					 <br/>
					<GetAJobSmallCardComponent name="Sr. UI/UX Designer" building="Cause Marketing" city="NewYork" cat1="Sketch" cat2="Photoshop" cat3="Figma" date="12/06/2020"/>
	 				 <br/>
					<GetAJobSmallCardComponent name="Sr. UI/UX Designer" building="Cause Marketing" city="NewYork" cat1="Sketch" cat2="Photoshop" cat3="Figma" date="12/06/2020"/>
					<br/>
					<GetAJobSmallCardComponent name="Sr. UI/UX Designer" building="Cause Marketing" city="NewYork" cat1="Sketch" cat2="Photoshop" cat3="Figma" date="12/06/2020"/>

	  				</Col>



  				<Col>
  				<GetAJobDescriptionComponent />
  				</Col>
  			
  				</Row>
  				</Container>
  			</div>



		</div>

		</div>);
}