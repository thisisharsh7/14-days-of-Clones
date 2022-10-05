import React, { useState } from "react";
import Card from "./Card";

export default function Fourthset() {
  const [over, getOver] = useState("");
  return (
    <section className="pb-10 pt-40 w-full bg-[url('https://www.digitalocean.com/_next/static/media/bottomWaveSliceBlue5.47e176fb.svg')] bg-repeat-x bg-top">
      <div className=" flex items-center justify-between max-w-screen-xl mx-auto px-5 gap-8 flex-wrap">
        <div className="flex flex-col items-start gap-10 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-blue-900">See what you can save</h1>
            <p>
              Monthly caps and flat pricing mean your bill is never a surprise.
            </p>
          </div>
          <a
            href="/"
            className="text-blue-500 font-semibold text-base flex gap-1"
            onMouseOver={() => {
              getOver(
                "transition-transform duration-300 delay-75 translate-x-3"
              );
            }}
            onMouseLeave={() => {
              getOver(
                "transition-transform duration-300 delay-75 translate-x-0"
              );
            }}
          >
            <span>Explore our products</span>
            <span className={over}>{"-->"}</span>
          </a>
        </div>
        <Card />
      </div>
      
    </section>
  );
}
