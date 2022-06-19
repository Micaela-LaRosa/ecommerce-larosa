import React from "react";

export default function ItemCount({initial, stock, onAdd, restar, sumar, cantSelect}) {
    
    
    return (
        <div>
            <button onClick={sumar}>+</button>
            <input value={cantSelect} />
            <button onClick={restar}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}
