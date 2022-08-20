import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartWidget = () => {

    const {clearAll, totalItems, totalPrice} = useContext(CartContext)

    return (
        <div class="container">
            <div class="">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        {totalItems > 0 && <span class="badge badge-sm indicator-item">{totalItems}</span>}
                    </div>
                </label>
                <div className="container">
                <div tabindex="0" className="  mt-auto card card-compact dropdown-content card-body w-25 h-25 ">
                    <div className="me-center" >
                        <span class="font-weight-bolder lead">{totalItems} Items</span>
                        <hr></hr>
                        <span class="text-primary-bold lead ">Subtotal: ${totalPrice}</span>
                        <hr></hr>
                        <div class="card-actions flex justify-center ">
                        <Link to="/cart"><button class=" px-25 btn btn-info btn-block w-24 ">Ver carrito</button></Link>
                       
                        <btn class="btn btn-danger btn-block w-24" onClick={clearAll}>Vaciar carrito</btn>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}



export default CartWidget;
