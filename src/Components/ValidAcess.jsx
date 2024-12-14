import { useContext } from "react"
import { UserContext } from "../Providers/UserContext.jsx"

 export const ValidAcess = () => {
    const { logado } = useContext(UserContext)
    const { setLogado } = useContext(UserContext)

    return(
        <div>
            <img src={logado == true ? "./src/Img/true.png" : "./src/Img/false.png"} alt={logado == true ? "TRUE" : "FALSE"} />
            <p>{logado == true ? "Conta criada com sucesso" : "Ops! Algo deu errado"}</p>
            <button onClick={() => setLogado(false)}>X</button>
        </div>
    )
 }
 export default ValidAcess