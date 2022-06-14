import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';

export default function CartWidget({items}) {
    return (
        <div>
            <span className="carrito">{items}</span>
            <Link to={'/'}>
                <img src="/assets/carrito.png" width="30px" className="imgCarrito" />
            </Link>
        </div>
    )
}
