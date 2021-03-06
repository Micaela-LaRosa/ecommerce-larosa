import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import MyProvider from './components/CartContext';
import { initializeApp } from 'firebase/app';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

export default function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBp6NaUImyAk0WcGZvq7T4nE4R5POqN5rI",
    authDomain: "ecommerce-larosa.firebaseapp.com",
    projectId: "ecommerce-larosa",
    storageBucket: "ecommerce-larosa.appspot.com",
    messagingSenderId: "684681665339",
    appId: "1:684681665339:web:c6d2a1722765d1b434b51e"
  };
  
  initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
      <MyProvider>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='category/:id' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </MyProvider>
      </BrowserRouter>
    </>
  );
}

