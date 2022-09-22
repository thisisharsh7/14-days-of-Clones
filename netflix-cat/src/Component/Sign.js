import React from "react";
import { Link } from "react-router-dom";

export default function Sign(props) {
  return (
    <>
      <div className="sign">
        <div className="sign-box">
          <h2>{props.sign}</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">{props.sign}</button>
            <div className="checkHelp">
              <div>
                <input type="checkbox" />
                Remember me
              </div>
              <p className="txtSimple">Need Help?</p>
            </div>
          </form>
          <p>
            <span className="txtSimple">{props.signPara}</span>
            <Link to={props.Oppsign === "Sign Up" ? "/sign-up" : "/sign-in"}>
              <span>{props.Oppsign}</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
