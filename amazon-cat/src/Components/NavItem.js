import React from "react";
import sBag from "./Images/bag.png";

export default function NavItem(props) {
  return (
    <div
      className={` sm:static sm:flex flex flex-col sm:flex-row sm:min-w-max items-center  justify-start sm:py-0 p-5 sm:justify-center gap-5 sm:px-1  absolute sm:bg-transparent sm:transition-none sm:translate-x-0 bg-denim top-12 right-0 bottom-0 ${props.popBlock}`}
    >
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
      <div className="sm:flex items-center gap-2">
        <img src={sBag} alt="cart" className="w-12" />
        {/* <a target="_blank" href="https://icons8.com/icon/84026/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <p className="text-center">0</p>
      </div>
    </div>
  );
}
