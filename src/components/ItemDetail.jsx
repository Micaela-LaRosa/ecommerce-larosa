import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';
import swal from 'sweetalert';
import './ItemDetail.css';

export default function ItemDetail({product}) {
    const [unidades, setUnidades] = useState(0);
    let {addItem} = useContext(CartContext);

    function onAdd(quantityToAdd){
        swal (`Se agregaron ${quantityToAdd} productos al carrito`);
        setUnidades(quantityToAdd);
        addItem(product, quantityToAdd)
    }
    return ( 
        <div className='container pb-3 box-1 mt-5'>
            <div className='row'>
                <h3 className='mt-3 title'>Detalle del producto seleccionado:</h3>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <div>
                        <img className='card-img-top itemCard' src={product.pictureUrl} alt={product.description} />
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 mt-3 fondo'>
                    <div className='alert'>
                        <ul>
                            <li className='h5 text-start'><u>Producto:</u> {product.title}</li>
                            <li className='h5 text-start'><u>Categoria:</u> {product.category}</li>
                            <li className='h5 text-start'><u>Precio:</u> ${product.price}</li>
                        </ul>
                    </div>
                    <div className='alert' role='alert'>
                        <h4 className='resaltado h5'>Descripción:</h4>
                        <h5 className='h5'> {product.description}</h5>
                    </div> 
                    <div className='text-center alert h5'>
                        {unidades > 0 ? 
                        <div>
                            <p className='fw-bolder h5'>
                                *Esta por comprar: Producto: {product.title} - Unidades: {" "}{unidades}
                            </p>
                            <Link to={'/cart'} className='btn finalizar h5'>FINALIZAR COMPRA</Link></div>:<ItemCount stock={product.stock} initial={1} onAdd={onAdd} />} 
                        </div>
                    </div>
                </div>
            </div>
        )};