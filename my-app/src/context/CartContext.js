import { createContext, useState } from 'react'

const CartContext = createContext () 

const CartProvider = ({ children }) => {
  const [orderId, setOrderId] = useState("");
  const [cart, setCart] = useState([]);

  const isInCart = (itemId) => {
      const exist = cart.find(el => el.id === itemId)
      return exist
  }

    const totalItems = cart.map(item => item.quantity).reduce((prev,curr) => prev + curr, 0)
    const totalPrice = cart.map(item => item.price * item.quantity).reduce((prev,curr) => prev + curr, 0)

  const addItem = (item) => {
      const exist = isInCart(item.id)
      if (!exist) {
          setCart([...cart, item])
          
      } else {
        const index = cart.findIndex(x => x.id === item.id)
        const cart_ = cart.slice()
        cart_[index].quantity = cart_[index].quantity+ item.quantity
        setCart(cart_)
          alert("El producto agregado al carrito")

          

      }
  }

 /* const getOrderId = (id) => {
    setOrderId(id)
    console.log(orderId)
}*/

  const deleteItem = (id) => {

    const _items = cart.filter(el => el.id !== id);
    setCart(_items);
          };

  

  const clearAll = () => {
      setCart([])
  }


  const data = {
        cart,
        addItem,
        isInCart,
        totalItems,
        totalPrice,
        deleteItem,
        clearAll
  }

  return (
      <CartContext.Provider value={data}>
          {children}
      </CartContext.Provider>
  )
}

export default CartContext;
export { CartProvider };
