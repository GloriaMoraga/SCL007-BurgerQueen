import React, {Component} from 'react';
import { Container, Row, Col, Navbar, Button} from 'react-bootstrap';
import fire from './config/Fire';
import NameForm from './Component/NameForm';
import Breakfast from './Component/Breakfast';
import Lunch from './Component/Lunch';
// import MostrarPedido from './Component/MostrarPedido';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
     }
logout(){
    fire.auth().signOut();

}
breakBtn(){
    document.getElementById('breakfastIndex').style.display="block";
    document.getElementById('lunchIndex').style.display="none";
  }
lunchBtn(){
    document.getElementById('lunchIndex').style.display="block";
    document.getElementById('breakfastIndex').style.display="none";
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
<Button onClick={this.breakBtn} >Desayuno</Button>
<Button className="ml-2" onClick={this.lunchBtn}>Almuerzo</Button>
    <Button className="ml-2" onClick={this.logout} >Salir</Button>
    
  </Navbar>
  <Container>
       <Row className="mt-5">
          <NameForm  />
       </Row>
    
      <Row>
          <Col md={8} >
          <div id ="breakfastIndex" style={{display: 'none'}}> <Breakfast /></div>
          <div id ="lunchIndex" style={{display: 'none'}}> <Lunch /></div>
         
          </Col>
          <Col md={4} >
          {/* <MostrarPedido/> */}
          </Col>
      </Row>
 </Container>
  
        </div>  
 
        
      
       
       
       
    
 
    
    
    );
}     

}

export default Home;