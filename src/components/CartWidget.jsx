import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget({items}) {
  return (
    <>
      <ShoppingCartIcon />
      <span>{items}</span>
    </>
  );
}

 