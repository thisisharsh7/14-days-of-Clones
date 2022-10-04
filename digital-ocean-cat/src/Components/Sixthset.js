import React, { useState } from "react";

export default function Sixthset() {
  const [over, getOver] = useState("");
  return (
    <section className="pt-24">
      <div className="flex flex-col items-center gap-6 py-6 px-1 text-blue-900 max-w-max mx-auto  rounded-3xl">
        <div className="flex flex-col gap-8 text-center">
          <h1 className="text-4xl ">Grow with a global community</h1>
          <p className="max-w-xl text-gray-600">
            Our community is made up of people all over the world, who are
            driven to develop software and grow businesses in the cloud. Learn
            from other cloud users through open tutorials, resources, and
            events.
          </p>
        </div>
        <a
          href="/"
          className=" font-semibold text-base text-sky-800 flex gap-1"
          onMouseOver={() => {
            getOver("transition-transform duration-300 delay-75 translate-x-3");
          }}
          onMouseLeave={() => {
            getOver("transition-transform duration-300 delay-75 translate-x-0");
          }}
        >
          <span>Join our community</span>
          <span className={over}>{"-->"}</span>
        </a>
      </div>
    </section>
  );
}
