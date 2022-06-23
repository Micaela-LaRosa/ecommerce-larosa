import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import useProducts from './useProducts';

export default function ItemListContainer({greeting}) {
  const {id} = useParams();
  const {isLoading, items} = useProducts(id);
  return (
    <>
      <div className='box container'>
        <div className='row'>
          <h4 className='mt-3'>{greeting}</h4>
          {isLoading ? <h4>LOADING...</h4>: <ItemList items={items} />}
        </div>
      </div>
    </>
  );
}
