import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({resultado}) {
    console.log(resultado)
    const {id, title, description, price, pictureUrl, stock} = resultado
    const [count, setCount] =useState(1)
    const[prodAgregados, setProdAgregados] = useState(0)

    function onAdd(){
        if ((stock - count) >= 0){
            alert('Se agregaron ' + count + ' productos al carrito')
            setProdAgregados(count)
        } else{
            alert('No hay más stock')
        }
    }
    function sumar() {
        {count < stock && setCount(count + 1)}
    }
        function restar() {
            count > 1 && setCount (count - 1) 
    }
    return ( 
        <div>
            <p><img src={pictureUrl} alt={description} width='150rem' /></p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>PRECIO: ${price}</p> 
                {prodAgregados === 0 &&
                <ItemCount stock={stock} initial={1} onAdd={onAdd} restar={restar} sumar={sumar} cantSelect={count} />}
                {prodAgregados > 0 && <Link to={`/cart`}>Finalizar Compra</Link>}
                {prodAgregados === 0 && <p>Cant. Disponible: {stock}</p>} 
        </div>
    )
}