
import '../App.css';
import leftbg from '../images/leftbg.svg'
import girl from '../images/africanman.svg'

import { Row, Col, Container } from 'react-bootstrap';
export function Temp(){
    return(<div>
      
            <img className="img-fluid  w-75 position-absolute imgPosition"   src={leftbg}/>
            <img  className="img-fluid w-50" style={{float:'right'}}  src={girl} />

            <div className="p-5 w-75" style={{ position:'relative', marginLeft:70}}>
                <h1><strong className="par">YOUNG LEADERS</strong></h1><br/>
                <p className="par">
                The Young Leaders Network was absolutely incredible in providing me with the
                amazing opportunity for a legal internship within a matter of days. Creating a
                profile that would attract other employers was very straightforward, and they were
                proactive in informing me of opportunities that I was most suited for.<br/><br/>
                    
                    
                They were extremely supportive and friendly, encouraging me in every step of the
                application process. I would definitely recommend The Young Leaders Network to
                anyone who is keen to get a job, an internship or any form of a role within an industry;
                The Young Leaders Network is the way to go!<br/>
                </p>
                <button className="btn btn-light" ><strong>Join the community</strong></button>
              </div>



          </div>);
}