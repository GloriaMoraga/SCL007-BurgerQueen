import React, {Component} from 'react';
import {  Card, Col } from 'react-bootstrap';
const JSON = 
    [
    {
      "name": "Café Americano",
      "price":"$500",
      "imagen":"./imgbreak/cafeamericano.jpg"
    },
    {
      "name": "Café con Leche",
      "price":"$700",
      "imagen":"./imgbreak/cafeconleche.jpg"
    },
    {
    
      "name": "Sandwich jamón con queso",
      "price":"$1000",
      "imagen":"./imgbreak/sandwich.jpg"
    }
    ,
    {
    
      "name": "Jugo Natural",
      "price":"$700",
      "imagen":"./imgbreak/Jugos.jpg"
    }
  ];



class Breakfast extends Component {
    render(){
        return(
          <Col md={4}  >
             {Object.keys(JSON).map( key => 
                 <Card style={{ width: '18rem' }}>
                        <Card.Img  src={require(`${JSON[key].imagen}`)} alt="Cardcap"/>
                        <Card.Body>
                        <Card.Title>{JSON[key].name}</Card.Title>
                        <Card.Text>{JSON[key].price}</Card.Text>
                        <button class="btn btn-primary">Pedir</button>
                        </Card.Body>
                     </Card>
                   
                )}
        </Col>  
          
        )
    }
}

export default Breakfast