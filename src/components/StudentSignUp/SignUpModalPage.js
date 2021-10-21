import {React, useState} from 'react';
import { Modal } from 'react-bootstrap';
import { AccountDetail } from './AccountDetail';
import {LoginPage2} from './LoginPage2'
import {LoginPage3} from './LoginPage3';
import {LoginPage4} from './LoginPage4';

import { Button} from 'react-bootstrap';


export function SignUpModalPage(props){

    const [accountDetail, setAccountDetail] = useState({
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        dob:''
      });
    
      //next step
      const nextStep = () => {
        const {step} = accountDetail;
        setAccountDetail(prevState=>(
          {
            ...prevState,
            step:step+1
          }
        ));
      }
    
     
    
      const prevStep = () => {
        if(accountDetail.step > 0 ){
          const {step} = accountDetail;
          setAccountDetail(prevState=>(
            {
              ...prevState,
              step:step-1
            }
          ));  
        }
      }
    
      // handle change
    
      const handleChange=(e)=>{
        const [name, value] = e.target; 
        setAccountDetail(prevState=>(
          {
            ...prevState,
            [name]:value
          }
        ));
      }
    
    function handleClick(){
      console.log("Yes betas");
      props.setModalShow(false);
    }
    

    return(<div>

            <Modal
                {...props}
                size="xl">
               <div>

               <Modal.Body >
                <Button onClick={handleClick} style={{float:'right', color:'black'}} className="bg-light">X</Button>       
                  {  
  
                  (function(){
                       const { firstName,
                              lastName,
                              email,
                              password,
                              confirmPassword,
                              dob} = accountDetail;
                              
                      const values = {
                          firstName,
                          lastName,
                          email,
                          password,
                          confirmPassword,
                          dob
                      }
                    switch(accountDetail.step){
                        case 1:
                            return (
                            <AccountDetail nextStep = {nextStep}  />                            
                             );
                       case 2:
                            return   <LoginPage2 nextStep = {nextStep} backStep = {prevStep}/>;
                       case 3:
                            return   <LoginPage3 nextStep = {nextStep} backStep = {prevStep}/>;
                       case 4:
                            return   <LoginPage4 handleClick={handleClick} />; 
                       default:
                            return <h1>Complete</h1>;
                          }
                    })()
                    }
        </Modal.Body>
        </div>
      </Modal>
    </div>);
}