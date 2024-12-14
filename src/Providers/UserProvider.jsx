import { createContext, useState } from "react";
import {api} from "../Services/api.js"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [inLog, setInLog ] = useState("false")
    const navigate = useNavigate()

    const userLogin = async (formData)  => {
        try{
            const {data} = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            setUser(data.user)
            navigate("/home")
        }catch(error){
            console.log(error)
        }
    }
    const userRegister = async (formData) => {
        try {
           await api.post("/users", formData)
           setInLog("true")
           navigate("/")
        } catch (error) {
           console.log(error)
           setInLog("false")
        }
     };

    return(
        <UserContext.Provider value={{user,inLog,setInLog,userLogin,userRegister}}>
            {children}
        </UserContext.Provider>
    )
}