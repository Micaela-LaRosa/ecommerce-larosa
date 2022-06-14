import React from 'react';

export default function ItemDetail({resultado}) {
    const {id, title, description, price, pictureUrl, stock} = resultado
    return (
        <div>
            <p><img src={pictureUrl} alt={description} width='150rem' /></p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>PRECIO: ${price}</p>
            <button>Agregar al carrito</button>    
        </div>
    )
}