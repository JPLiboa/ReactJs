import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount]= useState (initial);
    const incrementar = () =>{
        setCount(count +1);
    };
    const decrementar = () =>{
        setCount((valAnt) => (valAnt > 0 ? count - 1 : count));
    };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <button onClick={() =>{
        if (count <= stock){
          onAdd(count)
        }
        else {
          alert ("No hay suficientes productos");
        }
      }}
      >Agregar al carrito</button>
    </div>
  );
};

export default ItemCount 