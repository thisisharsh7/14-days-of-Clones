import React, { useState } from "react";
import googleI from "./images/google-logo.svg";
import githubI from "./images/github-logo.svg";
import blcloud from "./images/blcloud.svg";
import brcloud from "./images/brcloud.svg";
import lcloud from "./images/lcloud.svg";
import rcloud from "./images/rcloud.svg";
import fbutton from "./images/fbutton.svg";
import sbutton from "./images/sbutton.svg";
import tbutton from "./images/tbutton.svg";
import fobutton from "./images/fobutton.svg";
import doc1 from "./images/doc1.svg";

export default function Main() {
  const [over, getOver] = useState("");
  return (
    <main className="relative pb-20">
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
        <div className=" max-w-min pt-4 text-white flex flex-col gap-6 text-center z-10">
          <h1 className="text-8xl tracking-tight min-w-max">
            Simpler cloud.<br></br>Happier devs.<br></br> Better results.
          </h1>
          <p className="text-base">
            Businesses grow faster when developers can build on the simple,
            affordable cloud they love. DigitalOcean has the cloud computing
            services you need, with predictable pricing, robust documentation,
            and scalability to support your growth at any stage.
          </p>
        </div>
        <div className="flex gap-6 items-center font-semibold p-10 z-10">
          <a
            href=""
            className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 items-center"
          >
            <img src={googleI} alt="Google" />
            Sign up with Google
          </a>
          <a
            href=""
            className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 items-center"
          >
            <img src={githubI} alt="GitHub" />
            Sign up with GitHub
          </a>
          <a href="" className=" bg-blue-900 py-3 px-5 rounded-lg text-white">
            Sign up with email
          </a>
        </div>
      </section>
      <section className="bg-white z-10 relative rounded-t-3xl py-28 flex flex-col items-center w-full gap-24">
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
      </section>
      <section className="bg-cyan-100 z-10">
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-blue-900 text-4xl">Our Customers</h1>
        </div>
      </section>
      <section className="py-10 w-full">
        <div className=" flex items-center justify-between max-w-screen-xl mx-auto px-5 gap-8">
          <div className="flex flex-col items-start gap-10 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl text-blue-900">See what you can save</h1>
              <p>
                Monthly caps and flat pricing mean your bill is never a
                surprise.
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
          <div className="border-2 rounded-2xl">
            <div className="bg-blue-700 py-8 pr-2 pl-6 text-white rounded-t-2xl flex gap-10 flex-col">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl">Basic virtual machine costs</h1>
                <p className="text-base text-gray-100 max-w-md tracking-wider">
                  Easy, fast, and flexible compute built for a range of needs.
                </p>
              </div>
              <div className="flex gap-4 justify-evenly">
                <button>1 CPU</button>
                <button>2 CPUs</button>
                <button>4 CPUs</button>
                <button>8 CPUs</button>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <p className="flex items-center flex-wrap bg-gray-100 px-5 py-3 max-w-max rounded-md text-gray-700">
                <span>1 GiB Memory</span>
                <span> / 25 GiB Storage</span>
                <span> / 1,000 GiB Bandwidth</span>
              </p>
            </div>
            <ul className="px-5 py-10 flex flex-col gap-4 ">
              <li className="flex relative justify-between gap-10 border-b-2 rounded-none border-dashed p-0 pb-3">
                <div className="flex text-base gap-2">
                  <img src={fbutton} alt="DigitalOcean" className="p-0" />
                  <p className="self-center">DigitalOcean</p>
                </div>
                <div className="flex flex-col items-end gap-1 ">
                  <p>$96.00</p>
                  <p>Includes bandwidth</p>
                </div>
              </li>
              <li className="flex relative justify-between gap-10 border-b-2 rounded-none border-dashed p-0 pb-3">
                <div className="flex text-base gap-2">
                  <img src={sbutton} alt="GCP" className="p-0" />
                  <p className="self-center">GCP</p>
                </div>
                <div className="flex flex-col items-end gap-1 ">
                  <p>$110.19</p>
                  <p>With bandwidth: $91.88</p>
                </div>
              </li>
              <li className="flex relative justify-between gap-10 border-b-2 rounded-none border-dashed p-0 pb-3">
                <div className="flex text-base gap-2">
                  <img src={tbutton} alt="AWS" className="p-0" />
                  <p className="self-center">AWS</p>
                </div>
                <div className="flex flex-col items-end gap-1 ">
                  <p>$60.74</p>
                  <p>With bandwidth: $98.47</p>
                </div>
              </li>
              <li className="flex relative justify-between gap-10 p-0 pb-3">
                <div className="flex text-base gap-2">
                  <img src={fobutton} alt="Azure " className="p-0" />
                  <p className="self-center">Azure</p>
                </div>
                <div className="flex flex-col items-end gap-1 ">
                  <p>$60.74</p>
                  <p>With bandwidth: $79.99</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pt-20">
      <div className="flex bg-blue-900 text-white max-w-max mx-auto  rounded-3xl">
      <div className="flex flex-col items-start gap-4 py-6 px-10">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl ">A cloud for your entire journey</h1>
              <p className="max-w-xl">
              Build robust applications using a comprehensive portfolio of compute, storage, database, and networking products.
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
          <img src={doc1} alt="design1" className="p-0 mt-6"/>
          </div>
      </section>
      <section className="pt-24">
      <div className="flex flex-col items-center gap-6 py-6 px-1 text-blue-900 max-w-max mx-auto  rounded-3xl">
            <div className="flex flex-col gap-8 text-center">
              <h1 className="text-4xl ">Grow with a global community</h1>
              <p className="max-w-xl text-gray-600">
              Our community is made up of people all over the world, who are driven to develop software and grow businesses in the cloud. Learn from other cloud users through open tutorials, resources, and events.
              </p>
            </div>
            <a
              href="/"
              className=" font-semibold text-base text-sky-800 flex gap-1"
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
              <span>Join our community</span>
              <span className={over}>{"-->"}</span>
            </a>
          </div>
      </section>
    </main>
  );
}
