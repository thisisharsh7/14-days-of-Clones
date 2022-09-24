import React from "react";
import sBag from "./Images/bag.png";
import { Link } from "react-router-dom";

export default function NavItem(props) {
  return (
    <div
      className={` sm:static sm:flex flex flex-col sm:flex-row sm:min-w-max items-center  justify-start sm:py-0 p-5 sm:justify-center gap-5 sm:px-1  absolute sm:bg-transparent sm:transition-none bg-denim top-20 right-0 bottom-0 sm:w-max ${props.popBlock}`}
    >
      <p className="flex flex-col items-center h-min">
        <span className="text-xs">Hello</span>
        <Link to="/sign-in"><span className="font-bold min-w-max">Sign In</span></Link>
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
      <Link to="/cart"><img src={sBag} alt="cart" className="w-12" /></Link>
        
        {/* <a target="_blank" href="https://icons8.com/icon/84026/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <p className="text-center">{props.ItemCnt}</p>
      </div>
    </div>
  );
}
