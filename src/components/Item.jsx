import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({id, title, description, price, pictureUrl, stock}) {
    return (
        <div className='cardCss'>
            <b className='centrado'>{title}</b>
            <img src={pictureUrl} alt={description} width='150rem' />
            <p className='centrado'>{description}</p>
            <p>PRECIO: ${price}</p>
            <button>
            <Link className='btnAddCar' to={`/item/${id}`}>Ver mas detalles</Link>
            </button>
            <ItemCount stock={stock} initial={1} />
            <p>Artículos Disponibles: {stock}</p>
        </div>
    )
}
