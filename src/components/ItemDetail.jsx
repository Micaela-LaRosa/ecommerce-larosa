import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

export default function ItemDetail({product}) {
    const [unidades, setUnidades] = useState(0);
    let {addItem} = useContext(CartContext);

    function onAdd(quantityToAdd){
        alert(`Se han agregado: ${quantityToAdd} artículos`);
        setUnidades(quantityToAdd);
    }
    return ( 
        <div className='container bg-light pb-3 box-1 mt-5'>
            <div className='row'>
                <h3 className='mt-3'>Detalle del producto seleccionado:</h3>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <div className='card'>
                        <img className='card-img-top' src={product.pictureUrl} alt={product.description} width='150rem' />
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <div className='alert alert-info'>
                        <h4 className='text-start'>Producto: {product.title}</h4>
                        <h4 className='text-start'>Categoria: {product.category}</h4>
                        <h4 className='text-start'>Precio: ${product.price}</h4>
                    </div>
                    <div className='alert alert-info' role='alert'>
                        <h3>Descripción: {product.description}</h3>
                    </div> 
                    <div className='text-center alert alert-info'>
                        {unidades > 0 ? <div><Link to={'/cart'} onClick={()=>addItem(product,unidades)}>Finalizar mi compra</Link></div>:<ItemCount stock={product.stock} initial={1} onAdd={onAdd} />} 
                    </div>
                </div>
            </div>
        </div>
    )
}