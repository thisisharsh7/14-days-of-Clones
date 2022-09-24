import React from "react";
import Product from "./Product";

export default function Shop(props) {
  return (
    <div className="shopping-items flex flex-wrap gap-8 mt-10 mx-3 justify-center   ">
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      <Product AddTo={props.AddTo}/>
      
    </div>
  );
}
