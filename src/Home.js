import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
        
     <NavBar>
      <h1> Bienvenidos a Burger Queen</h1> 
        <button onClick={this.logout} >Salir</button>
      </NavBar>

        <Container>
         <Row>

        
   
      
         <NameForm />
         

         <Breakfast/>
      
       
       
        </Row>
       </Container>
  
    
  </Container>
    
    
    );
}     

}

export default Home;