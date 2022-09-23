import React from "react";
import sIcon from "./Images/serch.png";
import sBag from "./Images/bag.png";

export default function App() {
  return (
    <>
      <header className="bg-denim px-1 py-1 text-white">
        <nav className="flex items-center gap-2">
          <div className="px-4 py-0 h-min pt-3 min-w-max">
            <div className="sm:w-max flex text-white items-center h-min">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
                className="w-14 sm:w-28"
              />
              <span className="font-bold sm:text-xl pb-3 sm:pb-5 text-sm">.in</span>
            </div>
          </div>
          <div className="flex  items-center sm:w-8/12 h-min pl-3  bg-white text-denim">
            <input type="text" className="border-none focus:outline-none w-full pr-2 min-w-80" />
            <img src={sIcon} alt="search-icon" className="w-8 p-2 bg-srchC" />
          </div>
          <div className="sm:flex sm:min-w-max items-center gap-4 hidden">
          <p className="flex flex-col items-center h-min">
            <span className="text-xs">Hello</span>
            <span className="font-bold min-w-max">Sign In</span>
          </p>
          <p className="flex flex-col items-center h-min">
            <span className="text-xs">Returns</span>
            <span className="font-bold min-w-max">& Orders</span>
          </p>
          <p className="flex flex-col items-center h-min ">
            <span className="text-xs">Your</span>
            <span className="font-bold min-w-max">Prime</span>
          </p>
          <img src={sBag} alt="cart" />
          <p>0</p>
          </div>
          
        </nav>
      </header>
    </>
  );
}
