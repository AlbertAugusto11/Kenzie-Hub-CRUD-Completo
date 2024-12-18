import { useContext } from "react"
import { TechContext } from "../Providers/TechContext"
import TechCard from "./TechCard"
import "../Styles/techList.scss"

export const TechList = () =>{
    const {setIsOpen2} = useContext(TechContext)
    const {setIsOpen1} = useContext(TechContext)
    const {listTech} = useContext(TechContext)

    return(
        <div className="div__TechList">
            <div className="div__header">
                <p>Tecnologias</p>
                <button onClick={() => setIsOpen1(true)}>+</button>
            </div>
            <ul>
                {listTech.map(element =>{
                    return(
                        <TechCard key={element.id} element={element}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default TechList