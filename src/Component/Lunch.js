import React, {Component} from 'react';
import {  Row, Card, Button } from 'react-bootstrap';
import LunchData from './lunch.json'



class Lunch extends Component {
    constructor(){
        super();
        this.state = {
            "name": '',
            "price": ''
        }
         this.handleSubmit = this.handleSubmit.bind(this);

        
       

    }

    handleSubmit(name, price){
        this.setState({
             "name": name,
            "price": price
        });

            console.log(this.setState)
        
    }


    render(){
        return(
        <Row>
             {LunchData.map((postDetail, index) => 
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

export default Lunch;