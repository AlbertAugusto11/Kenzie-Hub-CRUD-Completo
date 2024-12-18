import { useContext } from "react"
import { UserContext } from "../../Providers/UserContext"
import { TechContext } from "../../Providers/TechContext"
import CreateTechModal from "../../Components/CreateTechModal"
import EditTechModal from "../../Components/EditTechModal"
import TechList from "../../Components/TechList"
import "../../Styles/homePage.scss"

export const HomePage = () => {
    const {user, userLogout} = useContext(UserContext)
    const {isOpen1 , isOpen2} = useContext(TechContext)

    return(
        <div className="div__HomePage">
            <div className="div__NavBar">
                <div>
                    <img src="./src/Img/Logo.png" alt="LOGO" />
                    <button onClick={() => userLogout()}>Sair</button>
                </div>
            </div>
            <header>
                <div>
                    <h1>Olá, {user.name}</h1>
                    <span>{user.course_module}</span>
                </div>
            </header>
            <TechList/>                
            {isOpen1 ? <CreateTechModal/> : null}
            {isOpen2 ? <EditTechModal/> : null}
        </div>
    )
}
export default HomePage