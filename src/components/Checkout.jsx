import { useContext, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './Checkout.css';
import { useFormik } from 'formik';

export default function Checkout() {
    const [orderId, setOrderId]= useState('');
    const [state, setState] = useState(false);

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    const { cart, getItemPrice, emptyCart } = useContext(CartContext);

    const formik= useFormik ({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
    });

    function handleClick(values){
        formik.handleSubmit(values);
            const order = {
            buyer: formik.values,
            items: cart,
            total: getItemPrice(),
            date: new Date(),
        };

        addDoc(orderCollection, order).then(({ id }) => {
            setOrderId(id);
            setState(true);
        })
        .catch(error => {
            console.log(error)
        });
    }

    if (cart.length === 0) {
        return (
            <div>
                <h1>Tu carro está vacío</h1>
                <Link to='/cart'>
                    <button>Volver al carrito</button>
                </Link>
            </div>
        );
    }

    const renderForm = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col col-lg-6 bg-ligth'>
                    <h2 className='h5 mt-3'>Formulario de contacto:</h2>
                    <p className='h5'>Completa estos campos con tu información para el envío</p>
                    <form onSubmit={handleClick}>
                        <div className='mb-3 h5'>
                            <label>Ingrese su nombre:</label>
                            <input onChange={formik.handleChange} type='text' value={formik.values.name} className='form-control h5' id='name' placeholder='Micaela La Rosa' required />
                        </div>
                        <div className='mb-3 h5'>
                            <label>Ingrese su email:</label>
                            <input onChange={formik.handleChange} type='email' values={formik.values.email} className='form-control h5' id='email' placeholder='mica.larosa91@gmail.com' required />
                        </div> 
                        <div className='mb-3 h5'>
                            <label>Ingrese su número telefónico: </label>
                            <input onChange={formik.handleChange} type='tel' value={formik.values.phone} className='form-control h5' id='phone' placeholder='3412570616' required />
                        </div>
                        <div className='containerButton'>
                            <button type='submit' className='btn proceder mb-1 h5'>ENVIAR DATOS</button>
                            <Link to='/'><button className='btn volver m-4 h5' onClick={() => emptyCart()}>Volver al Incio</button></Link>
                        </div>
                    </form>
                </div>
                <div className='col offset-md-1 col-lg-5 bg-ligth'>
                    <h5 className='mt-3 h5'>DETALLE DE SU COMPRA</h5>
                    <ul className='list-group h5'>
                        {cart?.map((item, key) => (
                            <div className='' key={item.id}>
                                <li className='list-group-item'>
                                    {item.title} - ${item.price} - Cantidad: {item.quantity}
                                </li>
                            </div>
                        ))}
                        <li className='list-group-item totalCompra text-white fw-bolder'>Total: ${getItemPrice()}</li>
                    </ul>
                </div>
            </div>                
        </div>                        
        );   
    };
    return (
        <>
            {state === true ? (
                <div className='alert alert-danger text-center h5' role='alert'>
                TU CÓDIGO DE IDENTIFICACION DE COMPRA ES:
                <h4 className='h5 m-3'>{orderId}</h4>
                    <p className='h5'><u>Nos pondremos en contacto para acordar el envío!!</u></p>
                </div>
            ) : (
                renderForm()
            )}
        </>
    );
}