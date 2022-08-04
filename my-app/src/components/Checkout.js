import React, { useState } from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Form from './Form';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



function Cart() {

  const { cart, totalItems, totalPrice } = useContext(CartContext)
  const [idOrden, setIdOrden] = useState("")


  const placeOrder = () => {
    const fecha = new Date();
    const fechaOrden = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

    const order = {
      buyer: { name: "Martin", phone: "+542954328298", email: "tincho_mondino@hotmail.com" },
      cart,
      totalPrice,
      fechaOrden
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(doc => setIdOrden(doc.id));

}

return (

  <section>

    {idOrden !== "" &&
      <div className="mt-10 alert alert-success shadow-lg w-8/12 m-auto">
        <div>
          
          <span>Su orden fue confirmada con el numero de ID : {idOrden} </span>
        </div>
      </div>
    }

    {cart.length > 0 &&
      <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">ITEMS EN CARRITO: {totalItems}</div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
      </div>}
    <div className='mt-10 text-left'>

      <Form/>


      <div className='mt-10 text-center'>
        <button className="btn btn-primary w-48 mr-10 " onClick={placeOrder}>Confirmar pedido</button>
        <Link to="../">
          <button className="btn btn-primary btn-block w-48">Vuelve al Store</button>
        </Link>

      </div>
    </div>
  </section>

)
}

export default Cart;