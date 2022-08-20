import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({ title, price, image, quantity,id}) => {

    const {deleteItem} = useContext(CartContext)

    const borrar = () => {
        deleteItem(id)
    }

    return (

        <div className="card w-3/5 bg-base-100 shadow-xl flex row flex-wrap  card-body items-center m-auto">
            <figure className="p-2">
                <img src={image}  className='justify-center'  width="190"  alt=""/>
            </figure>
            
            <h2 className="font-bold">{title}</h2>
           
            <div className='drop-down'>
            
            <p className="lead">Cantidad: {quantity}</p>
            <p className="lead">Price: ${price}</p>
            
            <p className="lead">Total: ${price*quantity}</p>
            <button className="btn btn-square btn-sm" onClick={borrar}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        </div>

    )

}

export default CartItem