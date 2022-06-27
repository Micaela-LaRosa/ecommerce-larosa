import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  const {id} = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = collection(db, 'Item');
    if (id) {
      const q = query(ItemCollection, where('category', '==', id));
      getDocs(q)
        .then((snapshot) =>{
          setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
        .catch((error) =>{
          setError(error);
        })
        .finally(() => {
        setIsLoading(false);
        });
    } else {
      getDocs(ItemCollection)
        .then((snapshot) =>{
          setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
        .catch((error) =>{
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  },[id]);
  return (
    <>
      <div className='box container'>
        <div className='row'>
          {isLoading ? <h4>LOADING...</h4>: <ItemList items={items} />}
        </div>
      </div>
    </>
  );
}
