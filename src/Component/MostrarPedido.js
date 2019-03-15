import React from 'react';
import {Row, Col, Table, Button} from 'react-bootstrap';
// import Breakfast from './Component/Breakfast';
// import Lunch from './Component/Lunch';


        
const MostrarPedido = (orders) => {
   
        return(
          <Row>
              <Col lg= {12}><h5>Cliente:</h5></Col>
              <Col lg= {12}>
          <Table responsive>
           <thead>
            <tr>
            <th>Item</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
              <th></th>
            </tr>
           </thead>
           <tbody>
          
            <tr>
            <td>{orders.name}</td>
            <td>{orders.price}</td>
            <td>
                {/* <button className="btn-small" onClick={() => updateQuantity(i, -1)}><i className="material-icons">remove</i></button>{orders.quantity}
                 
                    
                <Button className="btn-small" onClick={() => updateQuantity(i, 1)}><i className="material-icons">add</i></Button>*/}
                </td> 
            <td>{orders.subtotal}</td>
            {/* <td><Button className="btn red darken-1" onClick={() => removeProduct(i)}><i className="material-icons">close</i></Button></td> */}
            </tr>
           
           </tbody>
           
           </Table>
           <Button variant="info">Enviar a Cocina</Button>
           </Col>
           </Row>
        )
    }
       

export default MostrarPedido;