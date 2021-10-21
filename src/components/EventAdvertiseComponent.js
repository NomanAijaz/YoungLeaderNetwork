import Role from '../images/RoleVisability.svg'
import { Button } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';

export function EventAdvertiseComponent(){
    return(<div>
		
		<Container className="text-center mt-5">
  			<Row className="justify-content-md-center">
    			<Col sm={4} xs={4} md={5} lg={3}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Header style={{backgroundColor:'#FFC72B'}} >12 days Advertisement</Card.Header>
  						<Card.Body>
							    <Card.Text>
									The 12 days job to showcase your company and attract the best talent, on The Young Leaders Network
  								 </Card.Text>
								   <h1 className="mt-3 mb-3">£599</h1>
   								 <Button variant="warning" className="w-75"> Buy Event Post</Button>
  						</Card.Body>
					</Card>

				</Col>

    			<Col sm={4} xs={4} md={5} lg={3}>
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Header style={{backgroundColor:'#FFC72B'}} >28 days Advertisement</Card.Header>
  						<Card.Body>
							    <Card.Text>
									The 12 days job to showcase your company and attract the best talent, on The Young Leaders Network
  								 </Card.Text>
								   <h1 className="mt-3 mb-3">£1,676</h1>
   								 <Button variant="warning" className="w-75"> Buy Event Post</Button>
  						</Card.Body>
					</Card>
				</Col>
				
				<Col sm={4} xs={4} md={5} lg={3}>
					
					<Card className="text-center" style={{borderRadius:10}}>
  						<Card.Header style={{backgroundColor:'#FFC72B'}} >Target Job Post</Card.Header>
  						<Card.Body>
							    <Card.Text>
									A targeted approach to reach a certain demographic 
  								 </Card.Text>
								   <img className="mb-2" src={Role}/>
   								 <Button variant="warning" className="w-75"> Buy Event Post</Button>
  						</Card.Body>
					</Card>

				</Col>
		  </Row>

		</Container>
</div>);
}