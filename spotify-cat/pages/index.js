import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "../Components/Spotify";

export default function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);
  }, []);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}
