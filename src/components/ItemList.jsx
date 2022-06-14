import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemList({category}) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('productos.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => response.json())
            .then ((data) => {
                setTimeout (() => {
                    setLoading(false)
                    setResult(data);
                }, 1000);
            })
            .catch((e) => {
                fetch('../productos.json'
            , {
                headers: {
                    'Content-Typer': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setLoading(false)
                    setResult(data);
                },0);
            })
        })
        .finally(() => {
            console.log("fin")
        })
    }, [])
    
    let filterResult = []
        if (category !== undefined){
            filterResult = result.filter(num => num.category === category)
        } else {
            filterResult = result
        }
    return (
        <>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {filterResult && (filterResult.map((item) =>
            <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />))}
        </div>
        <div>
            {loading && 'Loading...'}
        </div>
        </>
    );
}