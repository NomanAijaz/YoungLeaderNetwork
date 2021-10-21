import { Row, Col, Container } from 'react-bootstrap';
import {  Image, Form, FloatingLabel, Button } from 'react-bootstrap';

import op1 from '../images/op1.png';
import iconP1 from '../images/iconP1.png'
import cross from '../images/cross.svg'
export function PostAJobCommonPage(props){
    return(<div className="mt-5">

<Container>
  <Row>
    <Col className="offset-1" sm={4} xs={4} md={3} lg={3}>
        <Row >
            <Col>

            <img style={{height:150}} src={op1}/></Col>

            <Col className="offset-3" >
            <div style={{marginLeft:-100}}>
                
            <h6 className="mt-2">Create Company Profile</h6>
            <br />
            <h6 className="mt-1" style={{opacity:0.4}}>Create Job/Event</h6>
            <br />
            <h6 className="mt-1" style={{opacity:0.4}}>Review & Post</h6>

            </div>
            </Col>
        </Row>
    </Col>
    <Col sm={7} xs={7} md={8} lg={8}>
        <h4>Create Company Profile</h4>
        <img className="position-absolute" style={{height:100}} src={iconP1} />
        <img className="position-relative" style={{marginTop:-10, marginLeft:-10}}  src={cross} />


<Row style={{marginTop:100}}>
    <Col sm={12} xs={12} md={12} lg={6}>    
    <FloatingLabel
    controlId="floatingInput"
    label="Company Name"
    className="mb-3">
    <Form.Control  name='firstName' type="text" placeholder="Company Name" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>

    <FloatingLabel
    controlId="floatingInput"
    label="Company Website"
    className="mb-3">
    <Form.Control name = 'dob' type="text" placeholder="Company Website" />
    </FloatingLabel>
  
    </Col>
</Row>

<Row>
    <Col sm={12} xs={12} md={12} lg={6}>    
    <FloatingLabel
    controlId="floatingInput"
    label="First Name"
    className="mb-3">
    <Form.Control  name='firstName' type="text" placeholder="First Name" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>

    <FloatingLabel
    controlId="floatingInput"
    label="Last Name"
    className="mb-3">
    <Form.Control name = 'dob' type="text" placeholder="Last Name" />
    </FloatingLabel>
  
    </Col>
</Row>

<Row >
    <Col sm={12} xs={12} md={12} lg={6}>    
    <FloatingLabel
    controlId="floatingInput"
    label="Email"
    className="mb-3">
    <Form.Control  name='Email' type="email" placeholder="Email" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>

    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3">
    <Form.Control name = 'dob' type="password" placeholder="Password" />
    </FloatingLabel>
  
    </Col>
</Row>

<Row >
    <Col sm={12} xs={12} md={12} lg={6}>
    <FloatingLabel
    controlId="floatingInput"
    label="Confirm Password"
    className="mb-3">
    <Form.Control name = 'Confirm Password' type="password" placeholder="Confrim Password" />
    </FloatingLabel>
    </Col>
</Row>

<Button variant="warning" style={{paddingLeft:55, paddingRight:55, float:'right' }} onClick={props.nextStep}  >Continue</Button>
 
    </Col>
  </Row>
</Container>

    </div>);
}