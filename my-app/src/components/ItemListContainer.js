import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from './products.json';
import Item from './Item';
import {useParams } from "react-router-dom";
import { getItems, getItemsFiltered } from '../firebase.js';


const ItemListContainer = () => {
  let {nombreCategoria} = useParams()
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    

    useEffect(() => {
      /*(nombreCategoria === undefined ? (getItems()) : getItemsFiltered(nombreCategoria)).then((snapshot) => {
        setProducts(
          snapshot.docs.map((document) => ({
            ...document.data(),
          }))
        );
        setTimeout(setLoading,2000,false);
      });
    }, [nombreCategoria]);*/
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
  

 
  );
}; 


export default ItemListContainer;
