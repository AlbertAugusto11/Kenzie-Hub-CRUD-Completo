import { createContext, useContext, useEffect, useState } from "react";
import {api} from "../Services/api.js"

export const TechContext = createContext({})
export const TechProvider = ({children}) => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [editTech, setEditTech] = useState(null)
    const [listTech, setListTech] = useState([])

    const loadTechs = async () => {
        try{
            const id = localStorage.getItem("@ID")
            const {data} = await api.get(`/users/${id}`)
            setListTech(data.techs)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        loadTechs()
    },[])

    const createTech = async (formData) => {
        try{
           const token = localStorage.getItem("@TOKEN")
            await api.post(`/users/techs`, formData, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
        loadTechs()
        }catch(error){
            console.log(error)
        }
    }
    const updataTech = async (formData,id) => {
        try{
            const token = localStorage.getItem("@TOKEN")
            await api.put(`/users/techs/${id}`, formData, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            loadTechs()
        }catch(error){
            console.log(error)
        }
    }
    const deleteTech = async (id) => {
        try{
            const token = localStorage.getItem("@TOKEN")
            await api.delete(`/users/techs/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            loadTechs()
        }catch(error){
            console.log(error)
        }
    }

    return(
        <TechContext.Provider value={{isOpen1,setIsOpen1,isOpen2,setIsOpen2,editTech,setEditTech,listTech,createTech,updataTech,deleteTech}}>
            {children}
        </TechContext.Provider>
    )
}