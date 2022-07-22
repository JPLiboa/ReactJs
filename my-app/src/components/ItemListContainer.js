import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products.json';
import Item from './Item';
import {useParams } from "react-router-dom";
  


const ItemListContainer = ({}) => {
  let {nombreCategoria} = useParams()
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    

    useEffect(() => {
        fetch(nombreCategoria === undefined ? 'https://fakestoreapi.com/products' : 'https://fakestoreapi.com/products/category/'+ nombreCategoria )
          .then((res) => res.json())
          .then((json) => {
            setTimeout(setLoading,2000,false);
            setProducts(json);
          })
          .catch(() => {
            alert('Ocurrio un error inesperado');
          });
      }, [products]);

    return (<div>
        <div>
            {loading ? (<h3>CARGANDO</h3>) : (<ItemList items={products}/>)}
            
        </div>
    </div>
  

  /*const [list, setList] = useState([])
  const [isLoading, setIsLoading]= useState(true);
  const asyncMock = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(  setList(products) );
    }, 2000);
  });
  
  function onAddCallback(n){
    alert ("agregados los productos ");
  };
  return (
    <div >
      {greeting}
      <ItemCount 
      stock={5} 
      initial={1} 
      onAdd={(onAddCallback)}
      />
      
      <ItemList items={list} /> 
      {isLoading ? <span>CARGANDO...</span> : <Item items ={products} />}
    </div>*/
  );
}; 


export default ItemListContainer;
