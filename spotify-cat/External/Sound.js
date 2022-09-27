import { createContext, useContext, useReducer } from "react";

export const SoundContext = createContext();


//function with props
export const Sound = ({initialState, reducer, children}) => (
    <SoundContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SoundContext.Provider>
);
export const useSound = () => useContext(SoundContext);