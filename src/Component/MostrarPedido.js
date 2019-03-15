// import React from 'react';
// import {Table, Button} from 'react-bootstrap';


        
// const MostrarPedido = (arrayOrders, updateQuantity, removeProduct ) => {
   
//         return(
            
//           <Table responsive>
//            <thead>
//             <tr>
//             <th>Item</th>
//             <th>Precio</th>
//             <th>Cantidad</th>
//             <th>Subtotal</th>
//               <th></th>
//             </tr>
//            </thead>
//            {arrayOrders.map((order, i) => {
//            <tbody>
          
//             <tr>
//             <td>{order.name}</td>
//             <td>{order.price}</td>
//             <td>
//                 <button className="btn-small" onClick={() => updateQuantity(i, -1)}><i className="material-icons">remove</i></button>{order.quantity}
                 
                    
//                 <Button className="btn-small" onClick={() => updateQuantity(i, 1)}><i className="material-icons">add</i></Button></td>
//             <td>{order.subtotal}</td>
//             <td><Button className="btn red darken-1" onClick={() => removeProduct(i)}><i className="material-icons">close</i></Button></td>
//             </tr>
           
//            </tbody>
//         })}
//            </Table>
      
//         )
//     }
       

// export default MostrarPedido;