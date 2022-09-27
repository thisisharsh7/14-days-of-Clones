//a file for seperate declaration of intial state and a reducer function

export const dInitialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    current_playlist: null,
    tracks: null,
    track: null,
    token: null,
};

export default function DataReducer(state, action){
    switch (action.type) {
        case "SET_TOKEN": {
            return {
                ...state,
                token: action.token
            }
        }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case "SET_PLAYLISTS": {
            return {
                ...state,
                playlists: action.playlists
            }
        }
        case 'SET_CURRENT_PLAYLIST': {
            let currentPlaylist = null;
            state.playlists.items.forEach(playlist => {
                if(playlist.id === action.id) {
                    currentPlaylist = playlist;
                }
            });
            return {
                ...state,
                current_playlist: currentPlaylist
            }
        }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                disover_weekly: action.disover_weekly
            }
        case 'SET_TRACKS': {
            return {
                ...state,
                tracks: action.tracks
            };
        }
        case 'SET_TRACK': {
            return {
                ...state,
                track: action.track
            };
        }
        default:
            return state;
    }
};