import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

export default function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const promesa = new Promise ((res, rej) =>{
      setTimeout (() => {
        res([
            {id: 1, title:'LAMPARA', description:'lampara de escritorio led', price: 200, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372322_a_lampmiacabnegro.jpg'},
            {id: 2, title:'MACETA', description:'maceta suculenta brown', price: 150, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/371436_a_adornosuculentabrown13cm_1.jpg'},
            {id: 3, title:'CANASTO', description:'canasto de mimbre con manija', price: 70, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/d4eeca0e77ddcc6ec3ba7fbd5a12a931/3/7/371750_a_cestoseagrasscmanija23x21.jpg'},
            {id: 4, title:'PORTARRETRATOS', description:'portarretratos tripta madera', price: 320, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/3/337747_a_portaretratostripta.jpg'},
            {id: 5, title:'VELA', description:'vela vainilla amor', price: 85, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/6/368353_a_velavainillaamor320grs.jpg'},
            {id: 6, title:'DECO CERAMICO', description:'deco ceramica calcareo pared', price: 200, pictureUrl:'https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/372918_a_decoceramicocalcareo25_4x25_4cm.jpg'},
        ]);
      }, 2000);
    });

    promesa
    .then((result) => {
      setProductos(result);
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
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
      <div>
        {loading && 'Loading...'}
        {error && 'Error en el pago'}
      </div>
    </>
  );
}
