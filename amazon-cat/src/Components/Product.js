import React, { useState } from "react";
import { useEffect } from "react";

export default function Product(props) {
  const [r, setR] = useState(5);
  const star = "⭐⭐⭐⭐⭐";
  useEffect(() => {
    setR(Math.floor(Math.random() * 5) + 1);
  }, []);

  return (
    <div className="product-card border basis-max border-gray-500 p-3 flex flex-col gap-6 items-start bg-white">
      <div className={`${props.cntItem}product flex  flex-col gap-2`}>
        <h1>{props.name}</h1>
        <p>{star.slice(0, r)}</p>
        <strong className="text-green-800 text-2xl price">
          <span>{r * 13}</span>
          <span>$</span>
        </strong>
        <img src={props.imgSrc} alt="product-show" className="w-40 h-40" />
      </div>
      <button
        type="button"
        className="bg-yellow-500 px-3 py-1 font-medium"
        onClick={props.AddTo}
      >
        Add to Cart
      </button>
    </div>
  );
}
