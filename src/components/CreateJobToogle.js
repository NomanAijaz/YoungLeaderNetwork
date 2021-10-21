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
import { CreateEventPg2 } from './CreateEventPg2';
import { CreateJobPg2 } from './CreateJobPg2';

export function CreateJobToogle(props){


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
		
               <div class="form-check form-switch" style={{float:'right', marginRight:20}}>
                    <input onClick={onHandleChange} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Job/Event</label>
        </div>


		<br/>

		{
            (function(){
                if(isChecked){
                   return <CreateEventPg2 nextStep = {props.nextStep} backStep = {props.prevStep}/>;
                }else{
                	return <CreateJobPg2 nextStep = {props.nextStep} backStep = {props.prevStep}/>
                }
            })()
        }



	<br/>
	

		</div>);
}