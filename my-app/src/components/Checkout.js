import React, { useState, clearAll, Cart } from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import Form from './Form';
import { getFirestore, collection, Timestamp, setDoc, addDoc,  } from 'firebase/firestore';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function Checkout() {

  const { cart, totalItems, totalPrice } = useContext(CartContext)
  const [userData, setUserData] = useState({name: '', phone: '', email: '', repEmail: ''});
  const MySwal = withReactContent(Swal)

  const notif = (id) =>  MySwal.fire({
    title: <strong>Order Placed!</strong>,
    html: <i>Your order Id is {id}</i>,
    icon: 'success'
     })  

  const handleChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    });
}


  const placeOrder = (e) => {
    e.preventDefault()
    const fechaOrden = Timestamp.fromDate(new Date())
    const order = {
      buyer: userData,
      cart,
      totalPrice,
      fechaOrden
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then((doc) => {
      notif(doc.id)
      setDoc(doc ,{id: doc.id}, {merge: true})
      })
    .catch(err => console.log(err))
    .finally(()=> {
      clearAll();
      setUserData({name: "", phone: "", email: "", repEmail: ""})}
      );

}

return (

  <section>

    

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