import { useContext } from "react"
import { TechContext } from "../Providers/TechContext"

export const TechCard = ({element}) => {
    const {setEditTech,setIsOpen2,deleteTech} = useContext(TechContext)
    return(
        <li>
            <p>{element.title}</p>
            <span>{element.status}</span>
            <button onClick={() => {
                setEditTech(element)
                setIsOpen2(true)
            }}>Editar</button>
            <button onClick={() => deleteTech(element.id)}>Excluir</button>
        </li>
    )
}
export default TechCard