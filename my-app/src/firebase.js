
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  const docRef = doc(db, 'Products', id); 
  return getDoc(docRef);
};



export const getItems = () => {
    const colRef = collection(db, 'Products'); 
    const q = query(colRef);
    return getDocs(q);
  };

  

export const getItemsFiltered = (categ) => {
    const colRef = query(collection(db, 'Products')) 
    const q = query(colRef, where("category", "==", categ));
    return getDocs(q);
  };

  export const sendOrder = (items,total) => {
    const order = {
      buyer: {name: "Juan", phone: "+54114856987", email: "liboajp@gmail.com"},
      items,
      total
    }
    const ordersCollection = collection(db,"orders")
    addDoc(ordersCollection, order).then(({id}) => console.log(id));
  }