import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detalles, setDetalles] = useState({})

  useEffect(() => {
    const getItem = new Promise ((res, rej) =>{
      setTimeout (() => {
        res(
            {id: 1, title:'LAMPARA', description:'lampara de escritorio led', price: 200, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372322_a_lampmiacabnegro.jpg'},
        );
      }, 2000);
    });

    getItem
    .then((result) => {
      setDetalles(result);
    })
    .catch((error) => {
      setError(false);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);


  return (
    <>
      <ItemDetail detalles={detalles}/>
      <div>
        {loading && 'Loading...'}
        {error && 'Error en el pago'}
      </div>
    </>
  );
}
