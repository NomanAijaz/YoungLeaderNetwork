import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg'
import location from '../images/loc.svg'
import wallet from '../images/fulltime.svg'
import box from '../images/fulltime1.svg'
import searchIcon from '../images/search.svg'
import {GetJob} from './GetJob'
import {GetAJobEvent} from './GetAJobEvent'
import {Footer} from './Footer'
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function GetAJob(){


		const[isChecked, setIsChecked] = React.useState(false);

        const onHandleChange =()=>{
            if(isChecked){
            setIsChecked(false);     
                      
            }
             else{
            setIsChecked(true);                    
             }

        }

	return(<div style={{backgroundColor:"#F9F9F9"}}>
		
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

		<div class="form-check form-switch ms-5 mt-5">
  			<input className="form-check-input" style={{color:'black'}} onClick={onHandleChange} type="checkbox" id="flexSwitchCheckChecked" />
  			<label className="form-check-label" for="flexSwitchCheckChecked">Job/Event</label>
		</div>


		<div className="d-flex justify-content-center h-25" >
			<div className="navRectangle w-75" style={{backgroundColor:'white'}}>
  					<div className="row">
    			    	<div className="col-sm-3">
    			    		<img className="bi bi-search p-3 pe-0" src={searchIcon}/>
            				<input type="text"  className="ms-3 mt-3 w-75 Search" size="lg" style={{borderRadius:3, border:0}}  placeholder="Search Category"  />
    			    	</div>
    				    <div class="col-sm-3">|
    			    		<img className="bi bi-search p-3 pe-0" src={location}/>
    			    		<label className="ms-1">Allow Current Location </label>
    				    </div>
    					<div className="col-sm-2">|
    			    		<img className="bi bi-search p-3 pe-0" src={wallet}/>
    					    <label className="ms-1">Full Time </label>
    					</div>
  				    	<div className="col-sm-2">|
    			    		<img className="bi bi-search p-3 pe-0" src={box}/>
     			    		<label className="ms-1" size="lg">£21,000-£25,000 </label> 				    	
  				    	</div>

  				    	<div className="col-sm-2">
  				    	<Button className="float-end btn-warning p-3 w-75">Find Job</Button>
  				    	</div>
				   </div>
			</div>
		</div>
		<br/>

		{
            (function(){
                if(isChecked){
                   return <GetAJobEvent />;
                }else{
                	return <GetJob />
                }
            })()
        }



	<br/>
	<Footer />


		</div>);
}