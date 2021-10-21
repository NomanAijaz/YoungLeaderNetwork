import { Row, Col, Container } from 'react-bootstrap';
import {  Image, Form, FloatingLabel, Button, Dropdown } from 'react-bootstrap';

import op1 from '../images/op2.png';
import iconP1 from '../images/iconP1.png'
import cross from '../images/cross.svg'
import '../App.css';

export function CreateEventPg2(props){
    return(<div className="mt-5 navRectangle">

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
        <Col sm={7} xs={7} md={8} lg={8}>
            <h4>Create Job/Event</h4>
            

            
    
    <Row style={{marginTop:100}}>
        <Col sm={6} xs={6} md={6} lg={5}>    
        <FloatingLabel
        controlId="floatingInput"
        label="Event Title"
        className="mb-3">
        <Form.Control  name='JobTitle' type="text" placeholder="Job Title" />
        </FloatingLabel>
        </Col>
    </Row>
    <br />
    <h5 className="mb-3">Location</h5>
    
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select Location 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
<br />

    <Row>
    <Col sm={12} xs={12} md={12} lg={5}>
        <h5>Date</h5>
    <FloatingLabel
    controlId="floatingInput"
    label="Link to Job"
    className="mb-3">
    <Form.Control name='email' type="email" placeholder="Email address" />
    </FloatingLabel>
    </Col>

    <Col sm={12} xs={12} md={12} lg={5}>
    <h5>Start Time and end time</h5>
    <FloatingLabel
    controlId="floatingInput"
    label="Company Website"
    className="mb-3">
    <Form.Control name ='confirmPassword'  type="password" placeholder="Confirmpassword" />
    </FloatingLabel>
    </Col>
  </Row>

  <Row>
        <h5>Event Description</h5>
        <Col sm={12} xs={12} md={12} lg={10}>    
        <FloatingLabel
        controlId="floatingInput"
        label="Type or paste job description here"
        className="mb-3">
        <Form.Control  name='JobTitle' type="text" placeholder="Job Title" />
        </FloatingLabel>
        </Col>
    </Row>

    <Row>
    <Col sm={12} xs={12} md={12} lg={5}>
    <h5>Industry</h5>

    				<select className="p-1 w-75 h-50" id="Sorting" required >
                        <option value="latestToOldest">Select Industry</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
    </Col>

    <Col sm={12} xs={12} md={12} lg={5}>
    <br />
    <FloatingLabel
    controlId="floatingInput"
    label="Link to event"
    className="mb-3">
    <Form.Control name ='confirmPassword'  type="password" placeholder="Confirmpassword" />
    </FloatingLabel>
    </Col>
  </Row>

    <br/>
    <div>
    <Row >
            <Col>
            <Button variant="light" style={{paddingLeft:55, paddingRight:55, float:'left' }} onClick={props.backStep} >Back</Button>
            </Col>
            <Col>
            <Button variant="warning" style={{paddingLeft:55, paddingRight:55, float:'right' }}  onClick={props.nexStep}>Continue</Button>
            </Col>

     </Row>


    </div>


        </Col>
      </Row>
    </Container>
        </div>);
}
