import React, {Component} from 'react';
import { Container, Row, Col, Navbar, Button} from 'react-bootstrap';
import fire from './config/Fire';
import NameForm from './Component/NameForm';
import Breakfast from './Component/Breakfast';
// import MostrarPedido from './Component/MostrarPedido';

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

 <div>
<Navbar bg="dark" variant="dark">
    <Col>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    
    </Navbar.Brand>
    </Col>
     <Col></Col>
<Button >Desayuno</Button>
<Button className="ml-2">Almuerzo</Button>
    <Button className="ml-2" onClick={this.logout} >Salir</Button>
    
  </Navbar>
  <Container>
       <Row className="mt-5">
          <NameForm  />
       </Row>
    
      <Row>
          <Col>
          <Breakfast/>
          </Col>
          <Col>
          {/* <MostrarPedido/> */}
          </Col>
      </Row>
 </Container>
  
        </div>  
 
        
      
       
       
       
    
 
    
    
    );
}     

}

export default Home;