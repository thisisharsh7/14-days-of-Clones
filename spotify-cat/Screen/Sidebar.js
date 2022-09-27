import { useData } from "../External/Data";
import spotify from "../External/spotify";

export default function Sidebar() {
  const [{ playlists }] = useData();
  const changePlaylist = (id, e) => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      id: id,
    });

    spotify.getPlaylistTracks(id).then((response) => {
      dispatch({
        type: "SET_TRACKS",
        tracks: response,
      });
    });
  };
  return (
    <div className=" flex flex-col w-32 items-start bg-black text-gray-500 font-bold">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify   "
      />
      <p>Home</p>
      <p>Search</p>
      <p>Your Library</p>
      <div>
        {playlists?.items?.map((playlist) => {
          console.log(playlist.name);
          return (
            <p
              onClick={(e) => {
                changePlaylist(playlist.id, e);
              }}
            >
              {playlist.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
