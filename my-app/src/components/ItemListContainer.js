import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Item from './Item';
import {useParams } from "react-router-dom";
import { getItems, getItemsFiltered } from '../firebase.js';
import PropagateLoader from "react-spinners/ClipLoader";


const ItemListContainer = () => {
  let {nombreCategoria} = useParams()
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    

    useEffect(() => {
      (nombreCategoria === undefined ? (getItems()) : getItemsFiltered(nombreCategoria)).then((snapshot) => {
        setProducts(
          snapshot.docs.map((document) => ({
            ...document.data(),
          }))
        );
        setTimeout(setLoading,2000,false);
      });
    }, [nombreCategoria]);
    /*fetch(nombreCategoria === undefined ? 'https://fakestoreapi.com/products' : 'https://fakestoreapi.com/products/category/'+ nombreCategoria )
          .then((res) => res.json())
          .then((json) => {
            setTimeout(setLoading,2000,false);
            setProducts(json);
          })
          .catch(() => {
            alert('Ocurrio un error');
          });
      }, [products]);*/

      return (
        <div className="mt-10 flex justify-center">
          <div>
              {loading ? 
              <div className="grid mt-5 mx-auto" >
                <PropagateLoader color={"192BD1"} loading={loading} size={50} /> 
              </div>
              : (<ItemList items={products}/>)}
              
          </div>
      </div>  
      )
  }


export default ItemListContainer;
