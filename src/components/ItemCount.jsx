import { useState } from "react";


export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] =useState(initial)
    function sumar() {
        if (count < stock) {
        setCount (count + 1)
        } else {
            alert('No podes agregar más productos')
        }
        }
        function restar() {
            count > initial ? setCount (count - 1) : alert ('No podes quitar más productos')
        }
    function reset(){
        setCount(initial)
    } 
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
        </div>
    )
}
