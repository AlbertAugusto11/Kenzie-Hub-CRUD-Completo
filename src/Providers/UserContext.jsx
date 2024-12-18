import { createContext, useEffect, useState } from "react"
import {api} from "../Services/api.js"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [logado, setLogado ] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
           const token = localStorage.getItem("@TOKEN")
           if (token) {
              try {
                 const { data } = await api.get("/profile", {
                    headers: {
                       Authorization: `Bearer ${token}`,
                    },
                 });
                 setUser(data)
                 navigate("/home")
              } catch (error) {
                 console.log(error)
                 localStorage.removeItem("@TOKEN")
                 localStorage.removeItem("@ID")
              }
           }
        };
        loadUser();
     }, []); 
    const userLogin = async (formData)  => {
        try{
            const {data} = await api.post("/sessions", formData)
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@ID", data.user.id)
            setUser(data.user)
            navigate("/home")
        }catch(error){
            console.log(error)
        }
    }
    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@ID")
        setUser(null)
        navigate("/")
     };
    const registerUser = async (formData) => {
        try{
            await api.post("/users", formData)
            setLogado(true)
            navigate("/")
        }catch(error){
            console.log(error)
            setLogado(false)
        }
     }

    return(
        <UserContext.Provider value={{user,logado,setLogado,userLogin,registerUser,userLogout}}>
            {children}
        </UserContext.Provider>
    )
}