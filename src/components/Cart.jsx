import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export default function Cart() {
  const {cart, getItemPrice, emptyCart, deleteItem} = useContext(CartContext);
  const renderCarrito= () => {
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
          <tbody>
        {cart?.map((item, key) => (
            <tr key= {key}>
              <td>
                  {item.title}
                </td>
                <td>
                  ${item.price}
                </td>
                <td>
                  {item.quantity}
                </td>
                <td>
                  ${item.quantity * item.price}
                </td>
                <td>
                  <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>Quitar</button>
                </td>
              </tr>
        ))}
        </tbody>
          <tfoot>
            <tr style={{borderWidth: '0'}}>
              <td colSpan={3}></td>
              <td className='table-danger fw-bolder'>Total: ${getItemPrice()}</td>
            </tr>
          </tfoot>
        </table>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button className='btn btn-primary mt-3' onClick={()=>emptyCart()}>Vaciar</button>
          <Link to={'/'} className='btn btn-success mt-3 mr-1'>Seguir Comprando</Link>
          <Link to={'/checkout'} className="btn btn-danger mt-3 mr-1">Continuar para pagar</Link>
        </div>
      </div>
    </>
  );
}

const renderItemVacios = () =>{
return(
  <div className='container mt-5'>
    <h5 className='fs-5'>No hay elementos en el carrito</h5>
    <Link to={'/'} className='btn btn-primary'>Volver al inicio</Link>
  </div>
)}

return (
  <>
    {cart.length > 0 ? renderCarrito() : renderItemVacios()}
  </>
)}
