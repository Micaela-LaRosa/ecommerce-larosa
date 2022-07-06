import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';

export default function CartWidget(setExpanded) {
    const {getItemQty} = useContext(CartContext)
    return (
        <>
            <Link to={'/cart'} onClick={()=> setExpanded(false)}>
                <img src='/assets/carrito.png' alt='carrito' width='20px' className='imgCarrito' />
                <span className='badge badge-light' >{getItemQty() > 0 && getItemQty()}</span>
            </Link>
        </>
    );
}
