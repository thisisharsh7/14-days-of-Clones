import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "../Components/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

export default function index() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }

    
  }, []);
  console.log("token", token);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}
