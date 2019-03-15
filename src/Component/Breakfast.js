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

    handleSubmit(name, quantity, price){
    const orders = this.state.orders;
    let subtotal = quantity * price;

    const order = {
      name: name,
      quantity: quantity,
      price: price,
      subtotal: subtotal
    }

    orders.push(order);

    // this.setState({orders});
  console.log(orders)
         
    }


    render(){
        return(
        <Row>
             {BreakData.map((postDetail, index) => 
                 <Card className="ml-2 mt-3" md={4} style={{ width: '14rem' }}>
                        <Card.Img key={1} src={require(`${postDetail.imagen}`)} alt="Cardcap"/>
                        <Card.Body>
                        <Card.Title key={2}>{postDetail.name}</Card.Title>
                        <Card.Text key={3}>{postDetail.price}</Card.Text>
                        <Button  onClick={()=>{
                            this.handleSubmit(postDetail.name, 1 ,postDetail.price);
                        }} type="submit" className="btn btn-primary">Agregar</Button>
                        </Card.Body>
                     </Card>
                   
              )}
                </Row>    
          
        )
    }
}

export default Breakfast