import { createContext, useState } from "react";
import {api} from "../Services/api.js"

export const TechContext = createContext({})
export const TechProvider = ({children}) => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [editTech, setEditTech] = useState(null)

    return(
        <TechContext.Provider value={{isOpen1,setIsOpen1,isOpen2,setIsOpen2,editTech}}>
            {children}
        </TechContext.Provider>
    )
}