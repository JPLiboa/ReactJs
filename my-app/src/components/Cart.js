import React from 'react'
import CartItem from './CartItem';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { sendOrder } from "../firebase.js"


function Cart() {

  const { cart, clearAll, totalPrice } = useContext(CartContext)
  

  

  return (

    <section>
    <div className="flex flex-column flex-wrap gap-3 w-4/5 m-auto justify-around">
        {cart.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            id={item.id}
            key={item.id}
          />))}
      </div>

      <div className='mt-10 text-center'>


        {cart.length > 0 ? 
        <div className='d-grid gap-2 d-md-block'>
          <Link to="../checkout">
              <button className="btn btn-info btn-block w-48 mr-10">Continuar compra</button>
            </Link>
            <button className="btn btn-danger w-48" onClick={clearAll}>Vaciar</button>

          </div>
          :
          <div>
            <h1 className='mb-10'>EMPTY CART</h1>
            <Link to="../">
              <button className="btn btn-primary btn-block w-48">VIEW PRODUCTS</button>
            </Link>
          </div>
        }
      </div>
    </section>

  )
}

export default Cart;