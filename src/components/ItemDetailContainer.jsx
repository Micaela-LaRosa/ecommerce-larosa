import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

  const [resultado, setResultado] = useState({})
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
    .then ((data) => {setResultado(data)})
    .catch((e) => {
      console.log("salio mal")
    })
    .finally(() => {
      console.log("fin");
    });
  }, [id]);


  return (
    <div>
        <ItemDetail resultado={resultado} />
    </div>
  );
}