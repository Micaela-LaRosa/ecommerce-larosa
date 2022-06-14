import React from 'react';
import ItemList from './ItemList';

export default function ItemListContainer({category}) {
  return (
    <>
      <h2>Bienvenido a la mejor página de decoración para el hogar!</h2>
      <div>
        <ItemList category={category} />
      </div>
    </>
  );
}
