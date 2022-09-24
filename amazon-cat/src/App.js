import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { useState } from "react";

export default function App() {
  const [setItemCnt , getItemCnt] = useState(0);
  function AddToCart(e){
    getItemCnt(setItemCnt + 1);
    console.log(e.target.parentElement.children[0])
  }
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
