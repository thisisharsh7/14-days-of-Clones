import React, { useReducer } from "react";
import fbutton from "../images/fbutton.svg";
import sbutton from "../images/sbutton.svg";
import tbutton from "../images/tbutton.svg";
import fobutton from "../images/fobutton.svg";

export default function Card() {
  const oCpu = [
    [
      "1",
      "25",
      "1,000",
      "6.00",
      "6.88",
      "91.88",
      "8.47",
      "98.47",
      "7.59",
      "79.59",
    ],
    [
      "4",
      "80",
      "4,000",
      "24.00",
      "27.55",
      "367.55",
      "30.37",
      "399.01",
      "30.37",
      "342.37",
    ],
    [
      "8",
      "160",
      "5,000",
      "48.00",
      "55.09",
      "480.09",
      "60.74",
      "521.54",
      "60.74",
      "452.74",
    ],
    [
      "16",
      "320",
      "6,000",
      "96.00",
      "110.19",
      "620.19",
      "121.47",
      "674.43",
      "121.18",
      "593.18",
    ],
  ];
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      default:
        return state;
    }
  }
  function setEvent(e) {
    const k = e.target.id;
    dispatch({ type: Number(k) });
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
        <div className="flex gap-8 sm:justify-evenly justify-start flex-wrap ">
          <button
            className={
              state === 0
                ? `transition-all duration-700 bg-blue-500 px-4 py-2 rounded-md`
                : `px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-700`
            }
            id={0}
            onClick={setEvent}
          >
            1 CPU
          </button>
          <button
            className={
              state === 1
                ? `transition-all duration-700 bg-blue-500 px-4 py-2 rounded-md`
                : `px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-700`
            }
            id={1}
            onClick={setEvent}
          >
            2 CPUs
          </button>
          <button
            className={
              state === 2
                ? `transition-all duration-700 bg-blue-500 px-4 py-2 rounded-md`
                : `px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-700`
            }
            id={2}
            onClick={setEvent}
          >
            {" "}
            4 CPUs
          </button>
          <button
            className={
              state === 3
                ? `transition-all duration-700  bg-blue-500  px-4 py-2 rounded-md`
                : `px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-700`
            }
            id={3}
            onClick={setEvent}
          >
            8 CPUs
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="flex items-center flex-wrap max-w-md text-base justify-center bg-gray-200 px-5 py-3  rounded-md text-gray-700">
          <span>{oCpu[state][0]} GiB Memory</span>
          <span> / {oCpu[state][1]} GiB Storage</span>
          <span> / {oCpu[state][2]} GiB Bandwidth</span>
        </p>
      </div>
      <ul className="pt-2 px-5 pb-5 flex flex-col gap-5 charges">
        <li className="flex relative justify-between gap-3 border-b-2 rounded-none border-dashed p-0 pb-3">
          <div className="flex text-base gap-2">
            <img src={fbutton} alt="DigitalOcean" className="p-0" />
            <p className="self-center">DigitalOcean</p>
          </div>
          <div className="flex flex-col items-end min-w-max gap-1 ">
            <p>${oCpu[state][3]}</p>
            <p>Includes bandwidth</p>
          </div>
        </li>
        <li className="flex relative justify-between gap-3 border-b-2 rounded-none border-dashed p-0 pb-3">
          <div className="flex text-base gap-2">
            <img src={sbutton} alt="GCP" className="p-0" />
            <p className="self-center">GCP</p>
          </div>
          <div className="flex flex-col items-end min-w-max gap-1 ">
            <p>${oCpu[state][4]}</p>
            <p>With bandwidth: ${oCpu[state][5]}</p>
          </div>
        </li>
        <li className="flex relative justify-between gap-3 border-b-2 rounded-none border-dashed p-0 pb-3">
          <div className="flex text-base gap-2">
            <img src={tbutton} alt="AWS" className="p-0" />
            <p className="self-center">AWS</p>
          </div>
          <div className="flex flex-col items-end min-w-max gap-1 ">
            <p>${oCpu[state][6]}</p>
            <p>With bandwidth: ${oCpu[state][7]}</p>
          </div>
        </li>
        <li className="flex relative justify-between gap-3 p-0 pb-3">
          <div className="flex text-base gap-2">
            <img src={fobutton} alt="Azure " className="p-0" />
            <p className="self-center">Azure</p>
          </div>
          <div className="flex flex-col items-end min-w-max gap-1 ">
            <p>${oCpu[state][8]}</p>
            <p>With bandwidth: ${oCpu[state][9]}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
