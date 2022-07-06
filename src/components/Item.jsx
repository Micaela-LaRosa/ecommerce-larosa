import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({producto}) {
    const { id, title, price, description, pictureUrl } = producto;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 generalContainer'>
            <div className='card mt-3 cardContainer'>
                <h5 className='card-title'>{title}</h5>
                <img className='card-img-top' src={pictureUrl} alt={description} />
                <hr className='my-3' />
                <p className='card-text'>{description}</p>
                <p className='card-text fw-bolder'>PRECIO: ${price}</p>
                <Link to={`/item/${id}`}><button className='btnVer'>VER MAS DETALLES</button></Link>
            </div>
        </div>
    )
}
