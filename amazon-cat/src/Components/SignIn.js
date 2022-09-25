import React from "react";
import { Link } from "react-router-dom";


export default function SignIn() {
  function signedIn(e){
    const email = e.target.parentElement.children[0].children[1];
    const pass = e.target.parentElement.children[1].children[1];
    email.value="";
    pass.value="";
  }
  return (
    <>
      <header className="w-full pb-4 pt-10">
          <Link to="/">
            <div className="m-auto w-max p-4 pb-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="amazon-logo"
                className="w-20 sm:w-28"
              />
            </div>
          </Link>
      </header>
      <main className="sign w-full grid place-items-center mt-5 p-1 pb-8">
        <div className="sign-box border w-11/12 sm:w-fit border-black border-opacity-50 px-4 pt-3 pb-5">
          <h2 className="text-4xl font-bold pb-5">Sign In</h2>
          <form className="flex flex-col w-full sm:w-80 gap-4 mb-5">
          <div className="flex flex-col">
            <label htmlFor="email text-gray-900">Email: </label>
            <input id="email" type="email" className="border-2 border-gray-900 h-8 p-2 focus:outline-orange-700" />
            </div>
            <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-900">Password: </label>
            <input id="password" type="password" className="border-2 border-gray-900 h-8 p-2 focus:outline-orange-700"/>
            </div>
            <button type="button" className=" border border-black bg-srchC w-full h-10 mt-2.5 hover:bg-orange-300" onClick={signedIn}>Sign In</button>
            <div>
              <p className="text-gray-800 text-sm">By Sign In, you agree to amazon terms and condition.Please see our privacy notice, our cookies notice and our interest based ad notice.</p>
            </div>
          </form>
          <button type="button" className="border border-black h-12 bg-zinc-300 w-full" disabled>Create Your Amazon Account</button>
        </div>
      </main>
    </>
  );
}
