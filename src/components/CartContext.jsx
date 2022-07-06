import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) => {
  
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('Item')) ?? []);

    useEffect(() => {
        localStorage.setItem('Item', JSON.stringify(cart));
    }, [cart]);

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }
    const addItem = (product, quantity) => {
        const newProduct = {
            ...product,
            quantity
        }
        if(!isInCart(newProduct.id)) {
            setCart([...cart, newProduct]);
        }else {
            const findProduct = (cart.find(item => item.id === newProduct.id));
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        }
        getItemPrice();
    }
    const emptyCart = () => {
        setCart([])
    }
    const deleteItem = (id) => {
        return setCart(cart.filter(item => item.id !== id));
    }
    const getItemQty = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0);
    }
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.price, 0);
    }
  
    return (
    <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>
    )
}

export default MyProvider;
