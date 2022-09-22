import React from "react";
import Main from "./Component/Main";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Sign from "./Component/Sign";
import Nav from "./Component/Nav";

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
        <Route
          path="/sign-in"
          element={
            <>
            <div className="bgNavSign">
              <Nav />
              <Sign sign="Sign In" signPara="Already subscribed to Netflix?" Oppsign="Sign Up" />
              </div>
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
            <div className="bgNavSign">
              <Nav  />
              <Sign sign="Sign Up" signPara="New to Netflix?" Oppsign="Sign In" />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}
