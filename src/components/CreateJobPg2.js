import { Row, Col, Container } from 'react-bootstrap';
import {  Image, Form, FloatingLabel, Button, Dropdown } from 'react-bootstrap';

import op1 from '../images/op2.png';
import iconP1 from '../images/iconP1.png'
import cross from '../images/cross.svg'

export function CreateJobPg2(props){
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
        <Col sm={7} xs={7} md={8} lg={8}>
            <h4>Create Company Profile</h4>
            

                <br />
            
            <img className="position-absolute" style={{height:100}} src={iconP1} />
            <img className="position-relative" style={{marginTop:-10, marginLeft:-10}}  src={cross} />
    
    
    <Row style={{marginTop:100}}>
        <Col sm={12} xs={12} md={12} lg={6}>    
        <FloatingLabel
        controlId="floatingInput"
        label="Job Title"
        className="mb-3">
        <Form.Control  name='JobTitle' type="text" placeholder="Job Title" />
        </FloatingLabel>
        </Col>
    </Row>
    <br />
    <h5>Employement Type</h5>
    <br/>
    <Row>
            <Col >    
                 <Form.Check type="checkbox" label="Full Time" />
            </Col>

            <Col >    
                <Form.Check type="checkbox" label="Part Time" />
            </Col>
            <Col >    
                <Form.Check type="checkbox" label="Apprenticeship" />
            </Col>

            <Col >    
                <Form.Check type="checkbox" label="Graduate Scheme" />
            </Col>

         </Row>
            <br/>
         <Row>
            <Col md={3} sm={2} lg={3}>    
                <Form.Check type="checkbox" label="Work Experience" />
            </Col>
            <Col md={3} sm={2} lg={3}>    
                <Form.Check type="checkbox" label="Volunteer" />
            </Col>
            <Col>    
                <Form.Check type="checkbox" label="Internship" />
            </Col>
         </Row>
    <br />
        <Row>
            <Col sm={12} md={6}>
            <h5>Industry</h5>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select Industry
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            </Col>
            <Col sm={12} md={6}>
            <h5>Senior Level</h5>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select Level
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Col>
        </Row>
        <br />
        <Row>
            <Col sm={12} md={6}>
            <h5>Country</h5>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    United Kingdom
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            </Col>
            <Col sm={12} md={6}>
            <h5>City</h5>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    London
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Col>
        </Row>
    <br/>

    <Row>
        <h5>Job Description</h5>
        <Col sm={12} xs={12} md={12} lg={8}>    
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
    <FloatingLabel
    controlId="floatingInput"
    label="Link to Job"
    className="mb-3">
    <Form.Control name='email' type="email" placeholder="Email address" />
    </FloatingLabel>
    </Col>

    <Col sm={12} xs={12} md={12} lg={5}>
    <FloatingLabel
    controlId="floatingInput"
    label="Company Website"
    className="mb-3">
    <Form.Control name ='confirmPassword'  type="password" placeholder="Confirmpassword" />
    </FloatingLabel>
    </Col>
  </Row>

<br />

<Row>
            <Col sm={12} md={6} lg={6}>
            <h5>Salary</h5>
                <Row>
                <Col sm={12} xs={12} md={12} lg={5}>
                   <FloatingLabel
                        controlId="floatingInput"
                        label="min"
                        className="mb-3">
                        <Form.Control name ='min'  type="text" placeholder="min" />
                        </FloatingLabel>
                </Col>
 
                <Col sm={12} xs={12} md={12} lg={5}>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="max"
                    className="mb-3">
                    <Form.Control name ='max'  type="text" placeholder="max" />
                    </FloatingLabel>
                </Col>
 
                </Row>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <h5>Skills</h5>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Select Skill 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </Col>
        </Row>

        <Row>
            <Col>
            <Button variant="light" style={{paddingLeft:55, paddingRight:55, float:'left' }} onClick={props.backStep} >Back</Button>
            </Col>
            <Col>
            <Button variant="warning" style={{paddingLeft:55, paddingRight:55, float:'right' }} onClick={props.nextStep} >Continue</Button>
            </Col>
        </Row>
 
        </Col>
      </Row>
    </Container>
    
        </div>);
}