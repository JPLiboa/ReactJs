import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({ title, price, image, quantity,id}) => {

    const {deleteItem} = useContext(CartContext)

    const borrar = () => {
        deleteItem(id)
    }

    return (

        <div class="card w-3/5 bg-base-100 shadow-xl flex flex-row flex-wrap justify-between card-body items-center m-auto">
            <figure class="p-2">
                <img src={image} alt="" class="rounded-xl h-12" />
            </figure>
            
            <h2 class="font-bold">{title}</h2>
            <hr></hr>
            <p class="italic">Cantidad: {quantity}</p>
            <p class="italic font-bold">Price: ${price}</p>
            <p class="italic font-bold">Total: ${price*quantity}</p>
            <button class="btn btn-square btn-sm" onClick={borrar}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

    )

}

export default CartItem