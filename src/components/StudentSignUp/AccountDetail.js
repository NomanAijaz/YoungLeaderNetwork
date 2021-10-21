import { Row, Col, Image, Form, FloatingLabel, Button } from 'react-bootstrap';
import LeftBgPicture from '../../images/bg1.svg'
import logo from '../../images/logo.svg'
import pic from '../../images/elements.svg'
import AficanGirl from '../../images/Group.svg'
export function AccountDetail(props){
    return (
    <div className="container">
      <Row>
      <Col sm={6} md={4} style={{backgroundColor:'#f7f7f7', marginLeft:-25}} className="h-100" >
      <img  className='mt-3' src={logo}/>
      <p className="p-5">
        You could have a one-topic paragraph
        describing Venus or a one-topic paragraph
        describing the colours of a sunset
      </p>

      <div className="text-center">
      <Image style={{position:'absolute'}}  src={AficanGirl}/>
      <Image style={{ marginBottom:20, marginLeft:-50}}   src={pic}/>
      </div>
      </Col>
      <Col>
      <form>


      <div style={{padding:50}}> 
    

      <Row>
<Col>
    <h5>Step <span style={{color:'#FEDE00'}}><strong>1</strong></span> from 4</h5>    
</Col>   
<Col>
<img style={{width:50,height:50,marginBottom:30}} src="https://camilita.com/wp-content/uploads/2021/01/Play-Icon-Logo-4.svg" />
</Col>
    </Row>

      <h2 className="mb-5 mt-5">Account Details</h2>       
  <Row>
    <Col sm={12} xs={12} md={12} lg={6}>    
    <FloatingLabel
    controlId="floatingInput"
    label="FirstName"
    className="mb-3">
    <Form.Control  name='firstName' type="text" placeholder="First Name" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>

    <FloatingLabel
    controlId="floatingInput"
    label="Date of Birth"
    className="mb-3">
    <Form.Control name = 'dob' type="text" placeholder="Date of Birth" />
    </FloatingLabel>
  
    </Col>
  </Row>

  <Row>
    <Col sm={12} xs={12} md={12} lg={6}>
    <FloatingLabel
    controlId="floatingInput"
    label="LastName"
    className="mb-3">
    <Form.Control name='lastName'  type="text" placeholder="Last Name" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>
    
    <FloatingLabel
    controlId="floatingInput"
    label="Password"
    className="mb-3">
    <Form.Control name = 'password' type="Password" placeholder="Password" />
    </FloatingLabel>
    </Col>
  </Row>
  <Row>
    <Col sm={12} xs={12} md={12} lg={6}>
    <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3">
    <Form.Control name='email' type="email" placeholder="Email address" />
    </FloatingLabel>
    </Col>
    <Col sm={12} xs={12} md={12} lg={6}>
    
    <FloatingLabel
    controlId="floatingInput"
    label="Confirmpassword"
    className="mb-3">
    <Form.Control name ='confirmPassword'  type="password" placeholder="Confirmpassword" />
    </FloatingLabel>
    </Col>
  </Row>
  <Button variant="warning" style={{paddingLeft:45, paddingRight:45}}onClick={props.nextStep} >Continue</Button> 
      </div>
        </form>
        </Col>
        </Row>
    </div>

    );
}