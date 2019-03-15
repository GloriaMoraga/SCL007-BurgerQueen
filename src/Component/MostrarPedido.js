import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class MostrarPedido extends Component {

    render(){
        return(
          <Table responsive>
           <thead>
            <tr>
            <th>#</th>
            <th>Item</th>
            <th>Precio</th>
            <th>Cantidad</th>
            </tr>
           </thead>
           <tbody>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
           </tbody>
           </Table>
        )}
       }

export default MostrarPedido;