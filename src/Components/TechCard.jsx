import { useContext } from "react"
import { TechContext } from "../Providers/TechContext"
import "../Styles/techCard.scss"

export const TechCard = ({element}) => {
    const {setEditTech,setIsOpen2,deleteTech} = useContext(TechContext)
    
    return(
        <li>
            <p>{element.title}</p>
            <div>
                <span>{element.status}</span>
                <button className="edit__buton" onClick={() => {
                setEditTech(element)
                setIsOpen2(true)
                }}></button>
                <button className="delete__buton" onClick={() => deleteTech(element.id)}></button>
            </div>
        </li>
    )
}
export default TechCard