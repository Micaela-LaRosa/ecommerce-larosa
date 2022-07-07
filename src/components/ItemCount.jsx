import React, {useState} from 'react';
import './ItemDetail.css';

export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);
    const sumar = () =>{
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restar = () =>{
        if (count > 0) {
            setCount(count-1)
        }
    };
    return (
    <>
        <div className='card-body'>
            <h5 className='h5'>Stock disponible: {stock}</h5>
            <h4 className='resaltado h5'>Cantidad seleccionada: {count}</h4>
            <div className='btn-group countButton' role='group' aria-label='basic example'>
                <button className='btn btn-md contador mt-1 h5' onClick={restar}>-</button>
                <button disable={stock === 0 || count ===0} className='btn btn-md agregar mt-1 h5' onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
                <button className='btn btn-md contador mt-1 h5' onClick={sumar}>+</button>
            </div>
        </div>
    </>
    );
}
