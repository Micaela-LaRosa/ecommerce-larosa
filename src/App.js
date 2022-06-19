import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="category/suelo" element={<ItemListContainer category={"suelo"} />} />
          <Route path="category/escritorio" element={<ItemListContainer category={"escritorio"} />} />
          <Route path="category/pared" element={<ItemListContainer category={"pared"} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

