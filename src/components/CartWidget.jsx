import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function CartWidget() {
    const {getItemQty} = useContext(CartContext)
    return (
        <>
            <Link to={"/cart"}>
                <img src="/assets/carrito.png" alt="carrito" width="30px" className="imgCarrito" />
                <span className="badge badge-light">{getItemQty() > 0 && getItemQty()}</span>
            </Link>
        </>
    );
}
