import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemCount from "./components/ItemCount";


export default function App() {
  const onAdd = (count) =>{
    alert(`Tenes ${count} productos agregados al carrito`);
  }
  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting={'Bienvenido a la mejor página de Decoración para el hogar!'}  />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

