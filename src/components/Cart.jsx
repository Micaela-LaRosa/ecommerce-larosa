import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const {cart, getItemPrice, emptyCart, deleteItem, getItemQty} = useContext(CartContext);

  return (
    <>
    <div className='container'>
        <h3 className='mt-3 h5'><u>Compras:</u></h3>
        {getItemQty() > 0 ?
        <table className='table table-striped table-hover mt-5'>
          <thead>
            <tr className='h5'>
              <th scope='col'>Producto</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'>SubTotal</th>
              <th scope='col'>Quitar producto</th>
            </tr>
          </thead>
          <tbody>
        {cart?.map((item, key) => (
            <tr className='h5' key= {key}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <button className='btn btn-danger h5' onClick={()=>deleteItem(item.id)}>X</button>
              </td>
            </tr>
        ))}
        </tbody>
          <tfoot>
            <tr style={{borderWidth: '0'}}>
              <td colSpan={3}></td>
              <td className='table-danger fw-bolder h5'>Total: ${getItemPrice()}</td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td>
                <button className='btn btn-sm mt-3 btnVaciar h5' onClick={() => emptyCart()}>VACIAR</button>
                <Link to={'/checkout'}><button className='pagar btn mt-1 mr-1 h5'>CONTINUAR AL PAGO</button></Link>
                <Link to={'/'}><button className='comprar btn mt-1 mr-1 h5'>SEGUIR COMPRANDO</button></Link>
              </td>
            </tr>
          </tfoot>
        </table>

    :

  <div className='container mt-5'>
    <h5 className='h5 mb-5'>No hay elementos en el carrito</h5>
    <Link to={'/'} className='btn btnVolver h5'>VOLVER AL INICIO</Link>
  </div>
} </div>
</>
  )
}
