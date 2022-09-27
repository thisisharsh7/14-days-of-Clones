import "../styles/globals.css";
import { Data } from "../External/Data";
import { Sound } from "../External/Sound";
import DataReducer, { dInitialState } from "../External/DataReducer";
import SoundReducer, { sInitialState } from "../External/soundReducer";

function MyApp({ Component, pageProps }) {
  return (
    <Data initialState={dInitialState} reducer={DataReducer}>
      <Sound initialState={sInitialState} reducer={SoundReducer}>
        <Component {...pageProps} />
      </Sound>
    </Data>
  );
}

export default MyApp;
