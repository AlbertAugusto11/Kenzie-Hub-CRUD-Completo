import { useEffect, useRef } from "react";

export const pressKey = (tecla) =>{
    const ref = useRef(null)

    useEffect(() =>{
        const pressKey = (event) =>{
            if(event.key === tecla){
                ref.current?.click()
            }
        }
            window.addEventListener("keydown", pressKey)
        return () =>{
            window.removeEventListener("keydown", pressKey)
        }
    },[])
    return ref
}