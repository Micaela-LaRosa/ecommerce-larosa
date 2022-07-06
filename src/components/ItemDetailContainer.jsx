import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'Item', id);
    getDoc(itemRef)
      .then((snapshot) => {
        setItem({...snapshot.data(), id: snapshot.id});
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className='d-flex justify-content-center'>
        {isLoading && <h4>LOADING...</h4> }
      </div>
      <div className='d-flex justify-content-center p-3'>
        {item && <ItemDetail product={item} />} 
      </div>
    </>
  );
}