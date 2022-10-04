import React, { useState } from "react";
import googleI from "./images/google-logo.svg";
import githubI from "./images/github-logo.svg";
import blcloud from "./images/blcloud.svg";
import brcloud from "./images/brcloud.svg";
import lcloud from "./images/lcloud.svg";
import rcloud from "./images/rcloud.svg";


export default function Main() {
  const [over , getOver] = useState('');
  return (
    <main>
      <section className=" first pt-12  pb-24 flex flex-col items-center gap-8 relative">
      <div className="absolute -left-3 top-20 ">
        <img src={lcloud} alt="cloud" />
      </div>
      <div className="absolute -right-3 top-16">
        <img src={rcloud} alt="cloud" />
      </div>
      <div className="absolute -right-3 -bottom-16">
        <img src={brcloud} alt="cloud" />
      </div>
      <div className="absolute -left-3 -bottom-16">
        <img src={blcloud} alt="cloud" />
      </div>
        <div className=" max-w-min pt-4 text-white flex flex-col gap-6 text-center">
          <h1 className="text-8xl tracking-tight min-w-max">Simpler cloud.<br></br>Happier devs.<br></br> Better results.</h1>
          <p className="text-base">
            Businesses grow faster when developers can build on the simple,
            affordable cloud they love. DigitalOcean has the cloud computing
            services you need, with predictable pricing, robust documentation,
            and scalability to support your growth at any stage.
          </p>
        </div>
        <div className="flex gap-6 items-center font-semibold p-10">
          <a href="" className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 items-center"><img src={googleI} alt="Google" />Sign up with Google</a>
          <a href="" className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 items-center"><img src={githubI} alt="GitHub" />Sign up with GitHub</a>
          <a href="" className=" bg-blue-900 py-3 px-5 rounded-lg text-white">Sign up with email</a>
        </div>
      </section>
      <section className="bg-white z-40 relative rounded-t-3xl py-24 flex flex-col items-center w-full gap-24">
        <div className="flex justify-evenly w-full max-w-screen-xl px-2">
          <p className="flex flex-col">
            <span className="text-4xl font-bold text-blue-600">14</span>
            <span className="text-xl text-gray-600 font-medium w-52">Globally distributed data centers</span>
          </p>
          <p className="flex flex-col">
            <span className="text-4xl font-bold text-blue-600">185</span>
            <span  className="text-xl text-gray-600 font-medium w-52">Countries our customers build in</span>
          </p>
          <p className="flex flex-col">
            <span className="text-4xl font-bold text-blue-600">{'>'} 600k</span>
            <span  className="text-xl text-gray-600 font-medium w-52">Customers building with DigitalOcean</span>
          </p>
          <p className="flex flex-col">
            <span className="text-4xl font-bold text-blue-600">99.99%</span>
            <span  className="text-xl text-gray-600 font-medium w-52">Uptime SLA for Droplets and Storage</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl text-blue-900">Do more with less complexity</h1>
          <p className="text-center max-w-2xl text-gray-500">Our simple UI, CLI, API, and docs enable you to spend time on your business while we focus on the infrastructure.</p>
          </div>
          <a href="/" className="text-blue-500 font-semibold text-base flex gap-1" onMouseOver={()=>{
            getOver('transition-transform duration-300 delay-75 translate-x-3');
          }} onMouseLeave={()=>{
            getOver('transition-transform duration-300 delay-75 translate-x-0')
          }}><span>Explore our products</span><span className={over}>{"-->"}</span></a>
        </div>
      </section>
    </main>
  );
}
