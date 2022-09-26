export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
  };
  
export default function reducer(state, action){
    console.log(action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
      default:
        return state;
    }
  };