import React from "react";
import googleI from "../images/google-logo.svg";
import githubI from "../images/github-logo.svg";
import blcloud from "../images/blcloud.svg";
import brcloud from "../images/brcloud.svg";
import lcloud from "../images/lcloud.svg";
import rcloud from "../images/rcloud.svg";

export default function Firstset() {
  return (
    <section className=" first md:pt-12 sm:pt-16 pt-20  pb-24 flex flex-col items-center gap-8 relative">
      <div className="absolute -left-3 top-20 xl:flex hidden">
        <img src={lcloud} alt="cloud" />
      </div>
      <div className="absolute -right-3 top-16 xl:flex hidden">
        <img src={rcloud} alt="cloud" />
      </div>
      <div className="absolute -right-3 -bottom-16 xl:flex hidden">
        <img src={brcloud} alt="cloud" />
      </div>
      <div className="absolute -left-3 -bottom-16 xl:flex hidden">
        <img src={blcloud} alt="cloud" />
      </div>
      <div className=" max-w-min pt-4 text-white flex flex-col gap-6 text-center z-10">
        <h1 className="md:text-8xl sm:text-7xl text-5xl break-all tracking-tight min-w-max headLong">
          Simpler cloud.<br></br>Happier devs.<br></br> Better results.
        </h1>
        <p className="text-base">
          Businesses grow faster when developers can build on the simple,
          affordable cloud they love. DigitalOcean has the cloud computing
          services you need, with predictable pricing, robust documentation, and
          scalability to support your growth at any stage.
        </p>
      </div>
      <div className="flex gap-6 font-semibold p-10 px-4  sm:px-10 z-10 flex-wrap ">
        <a
          href="/" 
          className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 justify-center items-center w-full "
        >
          <img src={googleI} alt="Google" />
          Sign up with Google
        </a>
        <a
          href="/"
          className=" bg-white py-2 pl-2 pr-6 rounded-lg text-black flex gap-2 items-center  justify-center w-full text-center"
        >
          <img src={githubI} alt="GitHub" />
          Sign up with GitHub
        </a>
        <a href="" className=" bg-blue-900 py-3 px-12 rounded-lg text-white w-full text-center">
          Sign up with email
        </a>
      </div>
    </section>
  );
}
