import React, {Component} from 'react';
import {  Row, Card, Button } from 'react-bootstrap';
import BreakData from './breakfast.json'



class Breakfast extends Component {
    constructor(){
        super();
        this.state = {
            "name": '',
            "price": ''
        }
         this.handleSubmit = this.handleSubmit.bind(this);

        
       

    }

    handleSubmit(name, price){
        this.setState({ "name": name,
            "price": price});

            console.log(this.state)
        
    }


    render(){
        return(
        <Row>
             {BreakData.map((postDetail, index) => 
                 <Card className="ml-2 mt-3" md={4} style={{ width: '15rem' }}>
                        <Card.Img  src={require(`${postDetail.imagen}`)} alt="Cardcap"/>
                        <Card.Body>
                        <Card.Title>{postDetail.name}</Card.Title>
                        <Card.Text>{postDetail.price}</Card.Text>
                        <Button  onClick={()=>{
                            this.handleSubmit(postDetail.name, postDetail.price);
                        }} type="submit" className="btn btn-primary">Agregar</Button>
                        </Card.Body>
                     </Card>
                   
              )}
                </Row>    
          
        )
    }
}

export default Breakfast