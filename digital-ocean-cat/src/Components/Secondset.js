import React, { useState } from "react";

export default function Secondset() {
  const [anim, setAnim] = useState("");
  return (
    <section className="bg-white z-10 relative rounded-t-3xl pt-28 pb-40 flex flex-col items-center w-full gap-24 bg-[url('https://www.digitalocean.com/_next/static/media/topWaveSliceBlue5.57825f7b.svg')] bg-repeat-x bg-bottom">
      <div className="flex justify-evenly w-full max-w-screen-xl px-2">
        <p className="flex flex-col">
          <span className="text-4xl font-bold text-blue-600">14</span>
          <span className="text-xl text-gray-600 font-medium w-52">
            Globally distributed data centers
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-4xl font-bold text-blue-600">185</span>
          <span className="text-xl text-gray-600 font-medium w-52">
            Countries our customers build in
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-4xl font-bold text-blue-600">{">"} 600k</span>
          <span className="text-xl text-gray-600 font-medium w-52">
            Customers building with DigitalOcean
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-4xl font-bold text-blue-600">99.99%</span>
          <span className="text-xl text-gray-600 font-medium w-52">
            Uptime SLA for Droplets and Storage
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl text-blue-900">
            Do more with less complexity
          </h1>
          <p className="text-center max-w-2xl text-gray-500">
            Our simple UI, CLI, API, and docs enable you to spend time on your
            business while we focus on the infrastructure.
          </p>
        </div>
        <a
          href="/"
          className="text-blue-500 font-semibold text-base flex gap-1"
          onMouseOver={() => {
            setAnim("transition-transform duration-300 delay-75 translate-x-3");
          }}
          onMouseLeave={() => {
            setAnim("transition-transform duration-300 delay-75 translate-x-0");
          }}
        >
          <span>Explore our products</span>
          <span className={anim}>{"-->"}</span>
        </a>
      </div>
    </section>
  );
}
