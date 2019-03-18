import React, {Component} from 'react';
import {  Row, Card, Button } from 'react-bootstrap';
import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(){
        super();
        this.state = {
            orders: [],
        }
         this.handleSubmit = this.handleSubmit.bind(this);

        
       

    }

    handleSubmit(nameItem, quantity, price){
    const orders = this.state.orders;
    let subtotal = quantity * price;

    const order = {
      name: nameItem,
      quantity: quantity,
      price: price,
      subtotal: subtotal
    }

    orders.push(order);
    return(orders) 
 
    }



    render(){
        return(
        <Row>
             {BreakData.map((postDetail, index) => 
                 <Card className="ml-2 mt-3" lg={4} md={6} xs={12} style={{ width: '14rem' }}>
                        <Card.Img  src={require(`${postDetail.imagen}`)} alt="Cardcap"/>
                        <Card.Body>
                        <Card.Title>{postDetail.name}</Card.Title>
                        <Card.Text>{postDetail.price}</Card.Text>
                        <Button variant="warning" onClick={()=>{
                            this.handleSubmit(postDetail.name, 1 ,postDetail.price);
                        }} type="submit" >Agregar</Button>
                        </Card.Body>
                     </Card>
                   
              )}
                </Row>    
          
        )
    }
}

export default Breakfast