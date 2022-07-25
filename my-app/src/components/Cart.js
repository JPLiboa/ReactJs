import React from 'react'
import CartItem from './CartItem';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';


function Cart() {

  const { cart, clearAll, totalItems, totalPrice } = useContext(CartContext)

  return (

    <section>
      {cart.length > 0 &&
        <div class="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
          <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">Total items: {totalItems}</div>
          
          <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">Precio total ${totalPrice}</div>
        </div>}
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
        {cart.length > 0 ? <btn class="btn btn-primary btn-block w-48" onClick={clearAll}>Cerrar Pedido</btn>
          :
          <Link to="../">
            <h1>EMPTY CART</h1><btn class="btn btn-primary btn-block w-48" onClick={clearAll}>COMPRAR PRODUCTOS</btn></Link>}
      </div>
    </section>

  )
}

export default Cart;