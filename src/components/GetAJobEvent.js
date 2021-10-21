import {GetAJobSmallCardEventComponent} from './GetAJobSmallCardEventComponent'
import {GetAJobEventDescriptionComponent} from './GetAJobEventDescriptionComponent'
import { Row, Col, Container, Button } from 'react-bootstrap';

export function GetAJobEvent(){
	return(<div>

		<div>
			<Container>
  				<Row>
    				<Col>
    				<label className="me-3">Sort By:</label>
    				<select className="p-1 w-25" id="Sorting" required >
                        <option value="latestToOldest">latest To Oldest</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
    				</Col>
  				</Row>
  			</Container>

  			<div>
  				<Container>
  				<Row className="mt-2">
  					
  					<Col>

  					<GetAJobSmallCardEventComponent name="Sr. UI/UX Designer" building="Wed, Apr 21,8:00 PM EEST " city="Online" des="In literary theory, a text is any object that can be , whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message." />	
					 <br/>
					 <GetAJobSmallCardEventComponent name="Sr. UI/UX Designer" building="Wed, Apr 21,8:00 PM EEST " city="Online" des="In literary theory, a text is any object that can be , whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message." />		 				 <br/>
					<br/>
					<GetAJobSmallCardEventComponent name="Sr. UI/UX Designer" building="Wed, Apr 21,8:00 PM EEST " city="Online" des="In literary theory, a text is any object that can be , whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message." />	
	  				</Col>



  				<Col>
  			      <GetAJobEventDescriptionComponent />
  				</Col>
  			
  				</Row>
  				</Container>
  			</div>



		</div>

		</div>);
}