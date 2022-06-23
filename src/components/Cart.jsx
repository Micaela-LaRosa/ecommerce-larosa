import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from './CartContext'

export default function Cart() {
  const {cart, getItemPrice, emptyCart, deleteItem} = useContext(CartContext)
  return (
    <>
    <div className='container'>
        <h3>Carrito</h3>
        <table className='table'>
          <thead className='table-info'>
            <tr>
              <th >
                Producto
              </th>
              <th>
                  Precio
              </th>
              <th>
                Cantidad
              </th>
              <th>
                SubTotal
              </th>
              <th>
                Acciones
              </th>
            </tr>
          </thead>
        {cart?.map((item) => (
          <>
            <tbody key= {item.id}>
              <tr key= {3}>
                <th key= {4}>
                  {item.title}
                </th>
                <th key= {1}>
                  ${item.price}
                </th>
                <th key= {2}>
                  {item.quantity}
                </th>
                <th key= {5}>
                  ${item.quantity * item.price}
                </th>
                <th key= {6}>
                  <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>Quitar</button>
                </th>
              </tr>
            </tbody>
          </>
        ))}
          <tfoot>
            <tr>
              <td className='h5 bg-warning'>Total: ${getItemPrice()}</td>
            </tr>
          </tfoot>
        </table>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button className='btn btn-primary' onClick={()=>emptyCart()}>Vaciar</button>
          <Link to={'/'} className='btn btn-success'>Seguir Comprando</Link>
        </div>
      </div>
    </>
  )
}
