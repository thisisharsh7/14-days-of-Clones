import React from "react";
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav>
        <Link to="/"><img src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png" alt="NETFLIX" /></Link>
      <ul>
        <li>
          <Link to="/sign-in">
            <button type="button" >
              Sign In
            </button>
          </Link>
        </li>
        <li>
          <Link to="/sign-up">
            <button type="button" >
              Sign Up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
