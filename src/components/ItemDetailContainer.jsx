import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

  const [itemDet, itemDetailId] = useState()
  const {id} = useParams()

  useEffect(() => {
    fetch('../../productos.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )

    .then((response) => response.json())
    .then ((data) => {itemDetailId(data.filter (prod => prod.id === id))})
    .catch((e) => {
      console.log("salio mal")
    })
    .finally(() => {
      console.log("fin");
    });
  }, [id]);


  return (
    <div>
      {itemDet && (itemDet.map((item) =>
        <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />))}
    </div>
  );
}