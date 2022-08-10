import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { getDetailItem } from '../firebase.js';
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {

  let { Item } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailItem(Item).then((snapshot) => {
      setData(snapshot.data())
      setTimeout(setLoading, 2000, false)
    })
  }, [Item]);

  return (<div className="mt-10 flex justify-center">
    {loading ? 
    <div className="mt-5" >
    <ClipLoader color={"192BD1"} loading={loading} size={50} /> 
    </div>
    : (<ItemDetail item={data} />)}
  </div>
  )
}

export default ItemDetailContainer;
