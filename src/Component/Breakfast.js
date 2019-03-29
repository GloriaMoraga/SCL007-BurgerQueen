import React, {Component} from 'react';
import {  Row, Card, Button } from 'react-bootstrap';
import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(){
        super();
        this.state = {
           orders:[]
        }
         this.handleSubmit = this.handleSubmit.bind(this);
}

 handleSubmit(nameItem, price){
    const orders = this.state.orders;
  
    const order = {
      item: nameItem,
      price: price
    }

    orders.push(order);
    this.props.addOrders(this.state.orders);


    }




    render(){
        return(
        <Row>
             {BreakData.map((postDetail, index) => 
                 <Card key={index} className="ml-2 mt-3" lg={4} md={6} xs={12} style={{ width: '14rem' }}>
                        <Card.Img  src={require(`${postDetail.imagen}`)} alt="Cardcap"/>
                        <Card.Body>
                        <Card.Title>{postDetail.name}</Card.Title>
                        <Card.Text>{postDetail.price}</Card.Text>
                        <Button variant="warning" onClick={()=>{
                            this.handleSubmit(postDetail.name, postDetail.price);
                        }} type="submit" >Agregar</Button>
                        </Card.Body>
                     </Card>
                   
              )}
                </Row>    
          
        )
    }
}

export default Breakfast