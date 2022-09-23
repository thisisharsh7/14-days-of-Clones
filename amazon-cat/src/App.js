import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
      </Routes>
    </>
  );
}
