import { useContext } from "react"
import { UserContext } from "../Providers/UserContext.jsx"
import "../Styles/validAcess.scss"

 export const ValidAcess = () => {
    const { logado } = useContext(UserContext)
    const { setLogado } = useContext(UserContext)

    return(
        <div className="valid__Acess">
            <img src={logado == true ? "./src/Img/true.png" : "./src/Img/false.png"} alt={logado == true ? "TRUE" : "FALSE"} />
            <h3>{logado == true ? "Conta criada com sucesso" : "Ops! Algo deu errado"}</h3>
            <button onClick={() => setLogado(null)}>X</button>
        </div>
    )
 }
 export default ValidAcess