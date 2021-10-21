
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {React, useState} from 'react';
import { SignUpModalPage } from './components/StudentSignUp/SignUpModalPage';
import {GetAJob} from './components/GetAJob'
import {Temp} from './components/temp'
import {GetJob} from './components/GetJob'
import {Advertise} from './components/Advertise'
import {AboutUs} from './components/AboutUs'
import {Home} from './components/Home'
import {CreateACommonPageForPositng} from './components/CreateACommonPageForPositng'
import {EmployerHomePage} from './components/EmployerHomePage';
import { SignInModalPage } from './components/StudentSignInFolder/SignInModalPage';
import { PostAJobCommonPage } from './components/PostAJobCommonPage';
import { CreateJobPg2 } from './components/CreateJobPg2';
import { CreateEventPg2 } from './components/CreateEventPg2';
import { CreateJobToogle } from './components/CreateJobToogle';
import { ReviewAndPost } from './components/ReviewAndPost';
import { CommonCreateJobPage } from './components/commonCreateJobPage';


function App() {

  const [modalShow, setModalShow] = useState(false);

  const [gate, setGate] = useState(false);

  const changeModalState=(e) => {
   e.preventDefault(); 
   setModalShow(true); 
   setGate(false);
  }


  const changeModalStateSignIn=(e) => {
   e.preventDefault(); 
   setGate(true); 
  }


  const changeModalStatef=(e) => {
   e.preventDefault(); 
   setModalShow(false) 
 }


  return (
    
       <Router>
       <Switch> 
    <div>
        <Route path="/" exact>
          {/* <ReviewAndPost /> */}
          <Home changeModalState = {changeModalState} changeModalStateSignIn = {changeModalStateSignIn} />        
        </Route>

        <SignUpModalPage show={modalShow} setModalShow={setModalShow} />

        <SignInModalPage show={gate} setGate={setGate} />

        <Route path="/about" exact>
            <AboutUs />
        </Route>

        <Route path="/getJob" exact>
            <GetAJob />
        </Route>

        <Route path="/employer" exact>
            <EmployerHomePage />
        </Route>

        <Route path="/postJob" exact>
            <CreateACommonPageForPositng />
        </Route>

        <Route path="/advertise" exact>
            <Advertise />
        </Route>

        <Route path="/post" exact>
            <CommonCreateJobPage />
        </Route>
    
        

    </div>
      </Switch>
      </Router>  
  );
}

export default App;
