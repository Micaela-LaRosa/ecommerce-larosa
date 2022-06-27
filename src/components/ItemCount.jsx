import React, {useState} from "react";

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
            <h4>Stock disponible: {stock}</h4>
            <h3>Cantidad seleccionada: {count}</h3>
            <div className='btn-group' role='group' aria-label='basic example'>
                <button className='btn btn-md btn-primary mt-1' onClick={restar}>-</button>
                <button disable={stock === 0 || count ===0}
                className='btn btn-md btn-danger mt-1' onClick={()=>onAdd(count)}>Agregar al carrito</button>
                <button className='btn btn-md btn-primary mt-1' onClick={sumar}>+</button>
            </div>
        </div>
    </>
    );
}
