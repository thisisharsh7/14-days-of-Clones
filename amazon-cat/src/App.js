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

export default function App() {
  const [setItemCnt , getItemCnt] = useState(showSavedCnt);
  const [setCart , getCart] = useState([]);
  
  function AddToCart(e){
    getItemCnt(setItemCnt + 1);
    getCart(e.target.parentElement.children[0]);
  }
  useEffect(()=>{
    localStorage.setItem("cart-cnt",JSON.stringify(setItemCnt));
  },[setItemCnt])
  console.log(setCart);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header ItemCnt={setItemCnt}/>
              <Main AddTo={AddToCart} />
            </>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/cart"
          element={
            <>
              <Header ItemCnt={setItemCnt}/>
              <Cart />
            </>
          }
        />
      </Routes>
    </>
  );
}
