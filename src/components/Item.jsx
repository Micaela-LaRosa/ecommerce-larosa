import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({producto}) {
    const { id, title, price, description, pictureUrl } = producto;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card mt-3'>
                <h5 className='card-title'>{title}</h5>
                <img className='card-img-top' src={pictureUrl} alt={description} width='150px' />
                <p className='card-text'>{description}</p>
                <p className='card-text'>PRECIO: ${price}</p>
                <button>
                    <Link to={`/item/${id}`} className='btn btn-prymary'>Ver mas detalles</Link>
                </button>
            </div>
        </div>
    )
}
