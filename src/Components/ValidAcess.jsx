import { useContext } from "react"
import { UserProvider } from "../Providers/UserProvider"

 export const ValidAcess = () => {
    const inLog = useContext(UserProvider)
    const setInLog = useContext(UserProvider)

    return(
        <div>
            <img src={inLog == "true" ? "./src/Img/true.png" : "./src/Img/false.png"} alt={valid == "true" ? "TRUE" : "FALSE"} />
            <p>{valid == "true" ? "Conta criada com sucesso" : "Ops! Algo deu errado"}</p>
            <button onClick={() => setInLog(null)}>X</button>
        </div>
    )
 }