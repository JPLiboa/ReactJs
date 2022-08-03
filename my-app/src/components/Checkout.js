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
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your order has been placed. Order ID : {idOrden} </span>
        </div>
      </div>
    }

    {cart.length > 0 &&
      <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">ITEMS EN CARRITO: {totalItems}</div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
      </div>}
    <div className='mt-10 text-center'>

      <Form/>


      <div>
        <button className="btn btn-primary w-48 mr-10" onClick={placeOrder}>Confirmar pedido</button>
        <Link to="../">
          <button className="btn btn-primary btn-block w-48">Vuelve al Store</button>
        </Link>

      </div>
    </div>
  </section>

)
}

export default Cart;