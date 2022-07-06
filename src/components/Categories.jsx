import React from 'react';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import {Link} from 'react-router-dom';

export default function Categories(setExpanded) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const CategoriesCollection = collection(db, 'Categories');
        getDocs(CategoriesCollection)
            .then ((snapshot) => {
                setCategory(snapshot.docs.map((doc) => doc.data().name));
            });
    },[]);
    return (
        <>
            { category.map((el) => ( <li className="nav-item" key={el}>
                <Link className="nav-link" to={'/category/' + el} onClick={()=> setExpanded(false)}>{el.charAt(0).toUpperCase()+ el.slice(1)}</Link></li>
            ))}
        </>
    );
}
