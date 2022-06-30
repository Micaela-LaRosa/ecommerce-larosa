import { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId]= useState("");
    const [state, setState] = useState(false);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const { cart, getItemPrice, emptyCart } = useContext(CartContext);

    function handleClick(){
            const order = {
            buyer: { name, email, phone },
            items: cart,
            total: getItemPrice(),
            date: new Date(),
        };

        if (!name || !email || !phone) {
            return (
                alert('Ingrese todos los datos requeridos')
            )};

        addDoc(orderCollection, order).then(({ id }) => {
            setOrderId(id);
            setState(true);
            emptyCart();
        })
        .catch(error => {
            console.log(error)
        })
    }

    const renderForm = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col col-lg-6 bg-ligth">
                    <h2 className="h5 mt-3">Formulario de contacto:</h2>
                    <p>Completa estos campos con tu información para el envío</p>
                    <div className="mb-3">
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Ingrese su nombre" />
                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" placeholder="Ingrese su email" />
                    </div> 
                    <div className="mb-3">
                        <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phone" placeholder="Ingrese su número de teléfono" />
                    </div>
                    <button onClick={()=> handleClick()} type="submit" className="btn btn-danger mb-3">ENVIAR DATOS</button>
                    </div>
                    <div className="col offset-md-1 col-lg-5 bg-ligth">
                        <h5 className="mt-3">DETALLE DE SU COMPRA</h5>
                        <ul className="list-group">
                            {cart?.map((item, key) => (
                                <div className="" key={item.id}>
                                    <li className="list-group-item">
                                        {item.title} - ${item.price} - Cantidad: {item.quantity}
                                    </li>
                                </div>
                            ))}
                            <li className="list-group-item bg-danger text-white fw-bolder">Total: ${getItemPrice()}</li>
                        </ul>
                    </div>
                </div>                
            </div>                        
        );   
    };
    return (
        <>
            {state === true ? (
                <div className="alert alert-primary" role="alert">Tu código de compra es: <h4>{orderId}</h4>
                    <p>Nos pondremos en contacto para acordar el envío</p>
                </div>
            ) : (
                renderForm()
            )}
            <Link to="/"><button className="btn btn-primary m-5" onClick={() => emptyCart()}>Volver al Incio</button></Link>
        </>
    );
}