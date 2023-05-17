import { createContext, useState } from "react";

export const ColorContext=createContext();

export const ColorProvider=props=>{
const [mode,setMode] =useState(localStorage.getItem('mode'));

    return <ColorContext.Provider value={[mode,setMode]}>
    {props.children}
    
    </ColorContext.Provider>
}