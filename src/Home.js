import React, {Component} from 'react';
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import fire from './config/Fire';
import NameForm from './Component/NameForm'
import Breakfast from './Component/Breakfast'

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
     }
logout(){
    fire.auth().signOut();

}

render(){
    return(
<Container fluid >
        
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      <button onClick={this.logout} >Salir</button>
    </Navbar.Brand>
  </Navbar>

  <Container>
         <Row>
   <Col> <NameForm /></Col>     
         
  <Breakfast/>
        
      
       
       
        </Row>
       </Container>
  
    
  </Container>
    
    
    );
}     

}

export default Home;