import { Row, Col, Container } from 'react-bootstrap';
import {  Image, Form, FloatingLabel, Button, Dropdown } from 'react-bootstrap';

import op1 from '../images/op3.png';
import iconP1 from '../images/iconP1.png'
import cross from '../images/cross.svg'
import { GetAJobDescriptionComponent } from './GetAJobDescriptionComponent';

export function ReviewAndPost(pros){
    return(<div className="mt-5">

    <Container>
      <Row>
        <Col className="offset-1" sm={4} xs={4} md={3} lg={3}>
            <Row >
                <Col>
    
                <img style={{height:150}} src={op1}/></Col>
    
                <Col className="offset-3" >
                <div style={{marginLeft:-100}}>
                    
                <h6 className="mt-2" style={{opacity:0.4}}>Create Company Profile</h6>
                <br />
                <h6 className="mt-1" >Create Job/Event</h6>
                <br />
                <h6 className="mt-1" style={{opacity:0.4}}>Review & Post</h6>
    
                </div>
                </Col>
            </Row>
        </Col>
        <Col sm={7} xs={7} md={6} lg={6}>
            <h4 >Review And Post</h4>
                <br />
                <br />
                

            <GetAJobDescriptionComponent />
            <br />
                <br />
            <Row className="mb-5">
                <Col>
                <button className="btn btn-light w-75">Back</button>
                </Col>

                <Col>                
                <button className="btn btn-warning w-75 offset-1 h-100" style={{float:'right'}}>pay $124.66</button>
                </Col>
            </Row>

        </Col>
      </Row>
    </Container>
    
        </div>);
}