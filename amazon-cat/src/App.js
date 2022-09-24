import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { useState } from "react";
import { useEffect } from "react";

const showSavedCnt = () =>{
  let savedCnt = localStorage.getItem("cart-cnt");
  if(savedCnt !== null){
    return JSON.parse(savedCnt);
  }else{
    return 0;
  }
}
const showSavedCart = () => {
  let savedCart = localStorage.getItem("cart-product");
  if(savedCart !== null){
    return  savedCart?.split(",");
  }else{
    return [];
  }
}

export default function App() {
  const [setItemCnt , getItemCnt] = useState(showSavedCnt);
  const [setCart , getCart] = useState(showSavedCart);
  const [setPrice , getPrice] = useState(0);
  
  function AddToCart(e){
    getItemCnt(setItemCnt + 1);
    const k = e.target.parentElement.children[0];
    getCart(()=> {return [ ...setCart , k.outerHTML] });
    getPrice(Number(k.children[2].children[0].innerText) + setPrice);
    
  }   
  function deleteToCart(e){
    getItemCnt(setItemCnt-1);
    const m = e.target.parentElement.children[1];
    const k = `${m.innerHTML}`;
    getCart(setCart.filter((scart)=>{
      return  `${scart}`!==k;
    }));
    getPrice(Number(m.children[0].children[2].children[0].innerText) - setPrice);
  }
  useEffect(()=>{
    localStorage.setItem("cart-cnt",JSON.stringify(setItemCnt));
    localStorage.setItem("cart-product" , setCart);
  },[setItemCnt,setCart])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header ItemCnt={setItemCnt}/>
              <Main AddTo={AddToCart} itemCnt={setItemCnt}/>
            </>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/cart"
          element={
            <>
              <Header ItemCnt={setItemCnt}/>
              <Cart cartItem={setCart} deleteCart={deleteToCart} ItemCnt={setItemCnt} pricing={setPrice}/>
            </>
          }
        />
      </Routes>
    </>
  );
}
