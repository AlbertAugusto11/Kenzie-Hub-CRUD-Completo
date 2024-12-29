import { useContext } from "react"
import { UserContext } from "../Providers/UserContext.jsx"
import "../Styles/validAcess.scss"
import ImgTrue from "../Img/true.png"
import ImgFalse from "../Img/false.png"

 export const ValidAcess = () => {
    const { logado } = useContext(UserContext)
    const { setLogado } = useContext(UserContext)

    return(
        <div className="valid__Acess">
            <img src={logado == true ? ImgTrue : ImgFalse} alt={logado == true ? "TRUE" : "FALSE"} />
            <h3>{logado == true ? "Conta criada com sucesso" : "Ops! Algo deu errado"}</h3>
            <button onClick={() => setLogado(null)}>X</button>
        </div>
    )
 }
 export default ValidAcess