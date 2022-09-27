import { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "../External/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useData } from "../External/Data";
import Header from "../Screen/Header";
import Sidebar from "../Screen/Sidebar";

const spotify = new SpotifyWebApi();

export default function index() {
  // const [token, setToken] = useState();
  const [{ token }, dispatch] = useData();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {


        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {

        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);
  return (
    <div className="app">
      {token ? (
        <>
          <Header /> <Sidebar />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
