import React from 'react';

export default function ItemDetail({detalles}) {
    const {title, description, price, pictureUrl} = detalles
    return (
        <div>
            <p><img src={pictureUrl} alt='lampara' width='150rem' /></p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>PRECIO: ${price}</p>    
        </div>
    )
}
