import React, { useEffect, useState } from 'react'
import CartItem from "./CartItem"
import { useParams, Link } from "react-router-dom";
import { getOrderById } from '../firebase.js';
import PropagateLoader from "react-spinners/ClipLoader";

function OrderById() {


  let { OrderId } = useParams();
  const [order, setOrder] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrderById(OrderId).then((snapshot) => {
      setOrder(snapshot.data())
      setTimeout(setLoading, 2000, false)
    })
  }, [OrderId])

  let { id, totalPrice, cart, buyer } = order

  return (

    <section>

      

      {loading ? <div className="mt-10 flex justify-center">
        <PropagateLoader color={"192BD1"} loading={loading} size={50} />
      </div>
        :
        (

          <section>
            <h1 className='grid h-20 w-8/12 mx-auto mt-10 card bg-base-300 rounded-box place-items-center shadow-xl font-bold'>Details for your Order N° {id}</h1>
            <div className="flex mx-auto w-8/12 mt-10 mb-10 font-bold">
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">Comprador: {buyer.name}</div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center shadow-xl">TOTAL ${totalPrice}</div>
            </div>

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

            <div>
              <Link to="../">
                <button className="btn btn-primary btn-block w-48 mt-10 flex mx-auto">Vuelve a la tienda</button>
              </Link>
            </div>
          </section>
        )}
    </section>
  )


}

export default OrderById;