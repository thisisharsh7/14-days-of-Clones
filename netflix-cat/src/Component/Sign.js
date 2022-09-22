import React from "react";

export default function Sign() {
  return (
    <>
      <div className="sign">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign In</button>
          <div>
            <button type="checkbox">Remember me</button>
            <p>Need Help?</p>
          </div>
        </form>
        <p>New to Netflix? Sign Up</p>
      </div>
    </>
  );
}
