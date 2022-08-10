
import { initializeApp } from "firebase/app";

import {doc, addDoc, getDoc, getDocs, getFirestore, collection, query, where } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB00bv3ooAo3FOG1A4c0rGnivQ_vAoWaoI",
  authDomain: "cursoreactjsliboa.firebaseapp.com",
  projectId: "cursoreactjsliboa",
  storageBucket: "cursoreactjsliboa.appspot.com",
  messagingSenderId: "1016943957652",
  appId: "1:1016943957652:web:271d75bd325e79bd8e0681",
  measurementId: "G-6GQ772GBJ6"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export const getDetailItem = (id) => {
  const docRef = doc(db, 'items', id); 
  return getDoc(docRef);
};



export const getItems = () => {
    const colRef = collection(db, 'items'); 
    const q = query(colRef);
    return getDocs(q);
  };

  

export const getItemsFiltered = (categ) => {
    const colRef = query(collection(db, 'items')) 
    const q = query(colRef, where("category", "==", categ));
    return getDocs(q);
  };

  
  export const getOrderById = (id) => {
    const docRef = doc(db, 'orders', id) 
    return getDoc(docRef);
  };

  /*export const getAllProducts = async () => {
    const itemCollection = collection (db, "items");
    const q = query (itemCollection);
    return await getDocs (q); 
  }
*/