import React, { useState } from "react";
export default function Header() {
  const [show , hide]  = useState("flex");
  return (
    <header className="sticky top-0 z-20">
      <div className="top py-1 px-0 justify-end text-base">
        <ul className="list-none flex max-w-screen-2xl my-0 mx-auto py-0 px-4 gap-2 text-sm font-medium">
          <li className="mr-auto flex items-center gap-1">
            Get alerted when assets are down, slow, or vulnerable to SSL
            attacks—all free for a month. Learn more <span>{"->"}</span>
          </li>
          <li>We're Hiring</li>
          <li>Blog</li>
          <li>Docs</li>
          <li>Get Support</li>
          <li>Sales</li>
        </ul>
      </div>
      <div className="mid py-3 px-0">
        <nav className="flex max-w-screen-2xl my-0 mx-auto py-0 px-4 text-base  items-center font-medium">
          <img
            src="https://www.digitalocean.com/_next/static/media/logo.87a8f3b8.svg"
            alt="logo"
          />
          <ul className="list-none flex gap-3 ">
            <li className="ml-16">Products</li>
            <li>Solutions</li>
            <li>Marketplace</li>
            <li>Community</li>
            <li>Pricing</li>
          </ul>
          <ul className="list-none flex gap-2 ml-auto">
            <li className="">Log in</li>
            <li className="bg-blue-600 hover:bg-blue-800 text-white font-semibold">Sign up</li>
          </ul>
        </nav>
      </div>
      <div className="absolute w-full">
      <div className={`top py-3 px-0  justify-center items-center cursor-pointer transition-all duration-700 delay-100 ${show} hover:bg-green-400 text-md relative rounded-b-md`}>
        <p className="text-white"><span className="font-semibold">Free credit active: </span><span>Get started on DigitalOcean with a $200, 60-day credit for new users.</span></p>
        <p className="absolute right-3 z-10 cursor-pointer font-semibold hover:text-blue-900 text-white" onClick={()=>{hide("hidden")}}>X</p>
      </div>  
      </div>
    </header>
  );
}
