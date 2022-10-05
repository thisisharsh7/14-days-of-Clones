import React, { useState } from "react";
export default function Header() {
  const [show, hide] = useState("flex");
  const [cross, checkCross] = useState(false);
  return (
    <header className="sticky top-0 z-20">
      <div className="top py-1 px-0 justify-end text-base">
        <ul className="list-none flex max-w-screen-2xl my-0 mx-auto py-0 px-4 gap-2 text-sm font-medium justify-center">
          <li className="xl:mr-auto xl:w-max">
            Get alerted when assets are down, slow, or vulnerable to SSL
            attacks—all free for a month. Learn more {"->"}
          </li>
          <li>We're Hiring</li>
          <li>Blog</li>
          <li>Docs</li>
          <li>Get Support</li>
          <li>Sales</li>
        </ul>
      </div>
      <div className="mid py-3 px-0 shadow-box">
        <nav className="flex max-w-screen-2xl my-0 mx-auto py-0 px-4 text-base  items-center font-medium  md:justify-start justify-between ">
          <img
            src="https://www.digitalocean.com/_next/static/media/do-logo.d3eb8550.svg"
            alt="logo"
            className="w-14 sm:hidden flex"
          />
          <img
            src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg"
            alt="logo"
            className="sm:flex  hidden"
          />

          <ul className="list-none flex gap-3 ">
            <li className="ml-16">Products</li>
            <li>Solutions</li>
            <li>Marketplace</li>
            <li>Community</li>
            <li>Pricing</li>
          </ul>
          <ul className="list-none sm:flex hidden gap-2 ml-auto">
            <li className="">Log in</li>
            <li className="bg-blue-600 hover:bg-blue-800 text-white font-semibold">
              Sign up
            </li>
          </ul>
          <div className="new-nav flex items-center">
            <div className="sm:flex hidden"></div>
            <div
              className="relative w-5 ml-8 h-5 transition-all duration-300 "
              onClick={(e) => {
                e.target.classList.toggle("hamburger");
                cross === true ? checkCross(false) : checkCross(true);
              }}
            ></div>
          </div>
          <div className= {(cross) ? "new-list p-4 list-none flex-col gap-5 absolute top-full bg-white right-0 left-0 " : "hidden"}>
            <ul className="flex-col gap-2 new-list-first ">
              <li>Products</li>
              <li>Solutions</li>
              <li>Marketplace</li>
              <li>Community</li>
              <li>Pricing</li>
            </ul>
            <ul className="list-none sm:hidden flex gap-2 w-full">
            <li className=" w-1/2 border-2 text-center">Log in</li>
            <li className="bg-blue-600 hover:bg-blue-800 text-white font-semibold w-1/2 text-center">
              Sign up
            </li>
            </ul>
            <ul className="flex flex-col gap-2 new-list-second ">
              <li>We're Hiring</li>
              <li>Blog</li>
              <li>Docs</li>
              <li>Get Support</li>
              <li>Sales</li>
            </ul>
            </div>
        </nav>
      </div>
      <div className="absolute w-full shadow-box">
        <div
          className={`top py-3 px-0  justify-center items-center cursor-pointer transition-all duration-700 delay-100 ${show} hover:bg-green-400 text-md relative rounded-b-md pr-10 pl-4`}
        >
          <p className="text-white">
            <span className="font-semibold">Free credit active: </span>
            <span>
              Get started on DigitalOcean with a $200, 60-day credit for new
              users.
            </span>
          </p>
          <p
            className="absolute right-3 z-10 cursor-pointer font-semibold hover:text-blue-900 text-white"
            onClick={() => {
              hide("hidden");
            }}
          >
            <div class="cross-stick"></div>
          </p>
        </div>
      </div>
    </header>
  );
}
