import React from "react";
import fbutton from "../images/fbutton.svg";
import sbutton from "../images/sbutton.svg";
import tbutton from "../images/tbutton.svg";
import fobutton from "../images/fobutton.svg";

export default function Card() {
    function setEvent(e){
        e.target.classList.add("bg-blue-400")
    }
  return (
    <div className="shadow-card rounded-2xl flex flex-col">
      <div className="bg-blue-700 py-8 pr-2 pl-6 text-white rounded-t-2xl flex gap-10 flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl">Basic virtual machine costs</h1>
          <p className="text-base text-gray-100 max-w-md tracking-wider">
            Easy, fast, and flexible compute built for a range of needs.
          </p>
        </div>
        <div className="flex gap-4 justify-evenly">
          <button className=" transition-all duration-700 hover:bg-blue-400 bg-opacity-50 px-4 py-2 rounded-md" onClick={setEvent}>
            1 CPU
          </button>
          <button className=" transition-all duration-700 hover:bg-blue-400 bg-opacity-50 px-4 py-2 rounded-md" onClick={setEvent}>
            2 CPUs
          </button>
          <button className=" transition-all duration-700 hover:bg-blue-400 bg-opacity-50 px-4 py-2 rounded-md" onClick={setEvent}>
            {" "}
            4 CPUs
          </button>
          <button className=" transition-all duration-700 hover:bg-blue-400 bg-opacity-50  px-4 py-2 rounded-md" onClick={setEvent}>
            8 CPUs
          </button>
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
  );
}
