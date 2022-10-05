import React, { useState } from "react";
import doc1 from "../images/doc1.svg";

export default function Fifthset() {
  const [over, getOver] = useState("");
  return (
    <section className="pt-20">
      <div className="flex bg-blue-900 text-white max-w-max mx-auto  rounded-3xl">
        <div className="flex flex-col items-start gap-4 py-6 px-10">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl ">A cloud for your entire journey</h1>
            <p className="max-w-xl">
              Build robust applications using a comprehensive portfolio of
              compute, storage, database, and networking products.
            </p>
          </div>
          <a
            href="/"
            className=" font-semibold text-base flex gap-1"
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
            <span>View the docs</span>
            <span className={over}>{"-->"}</span>
          </a>
        </div>
        <img src={doc1} alt="design1" className="p-0 mt-6" />
      </div>
    </section>
  );
}
