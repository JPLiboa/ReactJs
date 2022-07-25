import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartWidget = () => {

    const {clearAll, totalItems, totalPrice} = useContext(CartContext)

    return (
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {totalItems > 0 && <span class="badge badge-sm indicator-item">{totalItems}</span>}
                    </div>
                </label>
                <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-bold text-lg">{totalItems} Items</span>
                        <span class="text-info">Subtotal: ${totalPrice}</span>
                        <div class="card-actions flex justify-center">
                        <Link to="/cart"><button class=" px-25 btn btn-primary btn-block w-24  ">Ver carro</button></Link>
                       
                        <btn class="btn btn-danger btn-block w-24" onClick={clearAll}>Vaciar carro</btn>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}



export default CartWidget;
