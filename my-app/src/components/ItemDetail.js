import React, { useContext } from 'react'
import ItemCount from './ItemCount';
import { useState } from "react";
import { Link, NavLink} from "react-router-dom";
import CartContext from '../context/CartContext';


function ItemDetail ({item}) {

    const [sendStatus, setsendSatus] = useState(false)
    const {addItem} = useContext(CartContext)

    function onAddEvent(n) {

        setsendSatus(true)

        function onAddEvent(n) {
            setsendSatus(true)
            addItem({...item, quantity: n});
        }
        /*alert (`AGREGASTE AL CARRITO:
                Producto: ${item.title}
                Precio: ${item.price}
                Cantidad Agregada: ${n}
                Monto Total = ${n*item.price}`)*/
    }

    return (

        <div className='card w-10/12 m-auto flex flex-row flex-wrap justify-center bg-base-100 shadow-xl'>

                <div  id="imagenProducto" className='rounded mx-auto d-block' >
                    <img src={item.image} className='justify-center' width="250" alt="Album"/>
                </div>
            <hr></hr>
            <div className="text-center">
                <h1 className="card-title justify-center">{item.title}</h1>
                <hr></hr>
                <p className='text-center justify-center m-auto text-xl p-10'>{item.description}</p>
                <hr></hr>
                <p className='text-center justify-center m-auto text-xl  p-10 font-bold'>Precio ${item.price}</p>
                <hr></hr>
                <div className='flex flex-col'>
                    {sendStatus ? <NavLink to = "/card" className="btn btn-primary bg-primary w-24 mx-auto">Ver Carrito</NavLink> : <div className="card-actions justify-center"><ItemCount stock = {5} initial = {1} onAdd ={(n) => onAddEvent(n)}/></div>}
                    <Link to={"/"}><button className="btn btn-accent w-24 my-5">Volver</button></Link>
                </div>
            </div>
        </div>   
    )
}

    



export default ItemDetail
