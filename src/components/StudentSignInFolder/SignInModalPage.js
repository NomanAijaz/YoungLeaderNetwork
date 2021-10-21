import {React, useState} from 'react';
import { Modal } from 'react-bootstrap';
import {StudentSignIn} from './StudentSignIn';

import { Button} from 'react-bootstrap';

export function SignInModalPage(props){
    function handleClick(){
        console.log("Yes betas");
        props.setGate(false);
      }

      return(<div>

        <Modal
            {...props}
            size="xl">
           <div>

           <Modal.Body >
            <Button onClick={handleClick} style={{float:'right', color:'black'}} className="bg-light">X</Button>       
            <StudentSignIn />
    </Modal.Body>
    </div>
  </Modal>
</div>);
  
}