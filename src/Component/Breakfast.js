import React, {Component} from 'react';
import {  Row, Card, Button } from 'react-bootstrap';
import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(){
        super();
        this.state = {
            item:'',
            price:''
        }
         this.handleSubmit = this.handleSubmit.bind(this);
}

 handleSubmit(nameItem, price){


    this.setState({
          item: nameItem,
          price:price
        });
this.props.addOrders(this.state.item,this.state.price);

 console.log(nameItem, price)
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