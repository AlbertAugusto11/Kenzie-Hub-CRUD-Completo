import { useContext } from "react"
import { UserContext } from "../../Providers/UserContext"
import { TechContext } from "../../Providers/TechContext"
import CreateTechModal from "../../Components/CreateTechModal"
import EditTechModal from "../../Components/EditTechModal"

export const HomePage = () => {
    const {user} = useContext(UserContext)
    const {userLogout} = useContext(UserContext)
    const {isOpen1, setIsOpen1} = useContext(TechContext)
    const {isOpen2, setIsOpen2} = useContext(TechContext)

    return(
        <>
            <div>
                <img src="./src/Img/Logo.png" alt="LOGO" />
                <button onClick={() => userLogout()}>Sair</button>
            </div>
            <header>
                <h1>Olá, {user.name}</h1>
                <p>{user.course_module}</p>
            </header>
            <main>
                <div>
                    <h1>Tecnologias</h1>
                    <button onClick={() => setIsOpen1(true)}>+</button>
                </div>
                <ul>
                    UL - COM A LISTA
                    <button onClick={() => setIsOpen2(true)}>AQUI</button>
                </ul>
            </main>
            {isOpen1 ? <CreateTechModal/> : null}
            {isOpen2 ? <EditTechModal/> : null}

        </>
    )
}
export default HomePage