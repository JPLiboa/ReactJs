import React from 'react'
import ItemCount from './ItemCount';
import { useState } from "react";
import { Link, NavLink} from "react-router-dom";


function ItemDetail ({id, title, description, price, image}) {

    const [cart, setCart  ] = useState(true);
    

    

    return (

        <div className='col'>
            <div className='card' >
                <h5 className='card-title mx-auto'>{title} </h5>
                <img src={image} className="w-50 mx-auto" alt={title} />
                <div className="card-body mx-auto">
                <h4 className="card-text">Descripción</h4>
                <p className='text-text'>{description}</p>
                <h4 className="card-text mx-auto">Precio</h4>
                <p className='card-text mx-auto'>${price}</p>
                {cart ? (
                    <ItemCount
                    stock={10}
                    initial={1}
                    onAdd={(n) => {
                        alert ("Se agregaron los productos en el carrito ");
                        setCart (false);
                    } }
                />
                ) : (
                    <link to="/cart" className='btn btn-outline-primary btn-sm'> Ver el carrito</link>
                )  }
                </div>
            </div>
        </div>   
    )
} 


export default ItemDetail
