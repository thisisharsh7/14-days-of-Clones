import React from "react";

export default function Product(props) {
  return (
    <div className="product-card border basis-max border-gray-500 p-3 flex flex-col gap-6 items-start">
      <div className="product flex flex-col gap-2">
        <h1>Anything everything everywhere</h1>
        <p>⭐⭐⭐⭐⭐</p>
        <img src={props.imgSrc} alt="product-1"  className="w-40 h-40"/>
      </div>
      <button type="button" className="bg-yellow-500 px-3 py-1 font-medium" onClick={props.AddTo}>
        Add to Cart
      </button>
    </div>
  );
}
