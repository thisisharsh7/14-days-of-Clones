import { createContext, useContext, useReducer } from "react";

export const DataContext = createContext();

//function with props
export const Data = ({initialState, reducer, children}) => (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataContext.Provider>
);

export const useData = () => useContext(DataContext);