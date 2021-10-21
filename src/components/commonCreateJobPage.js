
import { Footer } from "./Footer";
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import {React, useState} from 'react';
import {PostAJobCommonPage} from './PostAJobCommonPage';
import { CreateJobToogle } from "./CreateJobToogle";
import { ReviewAndPost } from "./ReviewAndPost";
import { Link } from "react-router-dom";
import logo from '../images/logo.svg'

export function CommonCreateJobPage(){

    const [step, setStep] = useState(1);
    let x=step;
          //next step
          const nextStep = () => {
            x=x+1;
            setStep(x);
          }
        
         
        
          const prevStep = () => {
            if(step > 0 ){
                x=x-1;
              setStep(x);  
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

				<Nav.Link href="" className="ms-5"> <Link class="nav-link" to='/about'>
			             About us
                </Link></Nav.Link>
  
                
      			<Nav.Link href="" className="ms-5" >
                    <Link class="nav-link" to='/getJob'>Get A Job
                </Link></Nav.Link>

                
      			<Nav.Link href="" className="ms-5" >
				  <Link class="nav-link" to='/employer'>Employer</Link>
				</Nav.Link>
                
    			</Nav>
      		
  			</Navbar.Collapse>
			</Navbar>

		</div>

        {  
  
  (function(){

    switch(step){
        case 1:
            return (
            <PostAJobCommonPage nextStep = {nextStep}  />                            
             );
       case 2:
            return   <CreateJobToogle nextStep = {nextStep} backStep = {prevStep}/>;
       case 3:
            return   <ReviewAndPost nextStep = {nextStep} backStep = {prevStep}/>;
      
       default:
            return <h1>Complete</h1>;
          }
    })()
    }     


<Footer />
          </div>);
    

}