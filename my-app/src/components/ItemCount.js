import { useState } from 'react'

function ItemCount  ({stock, initial, onAdd}) {
    const [count, setCount]= useState (initial);

    const incrementar = () =>{
         if (count < stock) {setCount(count+1)}
            else {alert("No hay stock suficiente")}

        return (count, incrementar)
    };
    const decrementar = () =>{
      if (count > 1) { setCount(count-1)}

      return (count, decrementar)
    };
  return (
    <div className="w-64">
    <div className="card-actions justify-around items-center mb-4">
      <button className="btn btn-circle bg-primary btn-sm" onClick={() => incrementar()}>+</button>
      <p className="font-bold text-2xl text-center">{count}</p>
      <button className="btn btn-circle bg-primary btn-sm" onClick={() => decrementar()}>-</button>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary bg-primary w-9/12" onClick={() => onAdd(count)}>Agregar Al Carrito</button>
    </div>
  </div>
  
  );
};

export default ItemCount 