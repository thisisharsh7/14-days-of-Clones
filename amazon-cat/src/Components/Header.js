import React from "react";
import NavItem from "./NavItem";
import sIcon from "./Images/serch.png";
import menu from "./Images/menu.gif";
import stmenu from "./Images/stmenu.png";
import cross from "./Images/cross.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [set, getSet] = useState(stmenu);
  const [showNot, getShow] = useState("hidden");
  function pause(e) {
    if (set === stmenu) {
      getSet(menu);

      setTimeout(() => {
        getSet(cross);
        getShow("block");
      }, 500);
    } else {
      getSet(stmenu);
      getShow("hidden");
    }
  }
  return (
    <header className="bg-denim pr-2 py-1 text-white w-300px overflow-x-hidden">
      <nav className="flex items-center h-20 gap-2">
        <div className="px-4 py-0 h-min pt-3 min-w-max">
          <Link to="/">
            <div className="sm:w-max flex text-white items-center h-min">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
                className="w-14 sm:w-28"
              />
              <span className="font-bold sm:text-xl pb-3 sm:pb-5 text-sm">
                .in
              </span>
            </div>
          </Link>
        </div>
        <div className="flex w-full  items-center sm:w-8/12 h-min pl-3  bg-white text-denim z-30">
          <input
            type="text"
            className="border-none focus:outline-none min-w-48 w-full pr-2 "
          />
          <img src={sIcon} alt="search-icon" className="w-8 p-2 bg-srchC " />
          {/* <a target="_blank" href="https://icons8.com/icon/84026/search">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </div>
        <NavItem popBlock={showNot} ItemCnt={props.ItemCnt} />
        <img
          src={set}
          alt="menu"
          className="sm:hidden block w-6 bg-white z-30"
          onClick={pause}
        />
      </nav>
    </header>
  );
}
