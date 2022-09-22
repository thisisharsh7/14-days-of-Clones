import React from "react";
import Main from "./Component/Main";
import Header from "./Component/Header";

function SignNow(){
  document.querySelector("main").style.display="none";
}
export default function App() {
  return (
    <>
    <Header SignIn={SignNow} SignUp={SignNow}/>
      <Main />
    </> 
  );
}
