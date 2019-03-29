import React, {Component} from 'react';
import { Container, Row, Col, Navbar, Button, Table} from 'react-bootstrap';
import fire from './config/Fire';
import logo from './logo-bq.png';
import NameForm from './Component/NameForm';
import Breakfast from './Component/Breakfast';
import Lunch from './Component/Lunch';

import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
       
        }
        this.logout = this.logout.bind(this);
        this.addNote = this.addNote.bind(this);
        this.addOrders = this.addOrders.bind(this);
    
       
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


addNote(name){
this.setState({
  name
});

  }

addOrders(nameItem, price){
this.setState({
  nameItem, price
});
console.log(nameItem, price)
}  



render(){
 return(

 <div>
<Navbar bg="dark" variant="dark">
    <Col>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="200"
        height="auto"
        className="d-inline-block align-top"
      />
    
    </Navbar.Brand>
    </Col>
     <Col></Col>
<Button variant="success" onClick={this.breakBtn} >Desayuno</Button>
<Button variant="primary" className="ml-2" onClick={this.lunchBtn}>Almuerzo</Button>
<Button variant="light" className="ml-2" onClick={this.logout} >Salir</Button>
    
  </Navbar>
  <Container>
     
      <Row>
          <Col xs={6} md={6} lg={6} >
          <div className="mt-5">
          <NameForm  addNote={this.addNote} /></div>
    
          <div className="overflow-menu" >
          <div id ="breakfastIndex" style={{display: 'none'}}> 
            <Breakfast addOrders={this.addOrders}/></div>
          <div id ="lunchIndex" style={{display: 'none'}}> <Lunch /></div>
          </div>
          </Col>
          <Col className="mt-5" xs={6} md={6} lg={6}>
              <Row>
              <Col lg= {12}><h5>Cliente:{this.state.name}</h5></Col>
              <Col lg= {12}>
              <Table responsive>
           <thead>
            <tr>
            <th>Item</th>
            <th>Precio</th>
            
              <th></th>
            </tr>
           </thead>
           <tbody>
          
            <tr>
            <td>{this.state.nameItem}</td>
            <td>{this.state.price}</td>
             </tr>
           
           </tbody>
           
           </Table>
           <Button variant="info">Enviar a Cocina</Button>
           </Col>
           </Row>
       
          </Col>

          <Col lg={12} className="mt-5 mb-5"></Col>
      </Row>
 </Container>
  
        </div>  
    );
             
}     

}

export default Home;