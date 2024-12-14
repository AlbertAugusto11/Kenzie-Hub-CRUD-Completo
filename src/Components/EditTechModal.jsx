import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../Providers/TechContext"
import "../Styles/modalEdit.scss"

export const EditTechModal = () => {
    const { editTech } = useContext(TechContext)
    const {register, reset, handleSubmit} = useForm({
        values:{
            title: editTech.title,
            status: editTech.status,
        }
    })
    const { setIsOpen2 } = useContext(TechContext)
    submit = async (formData) => {

    }

    return(
        <div className="modalOverlay" role="dialog">
            <div className="box__ModalEdit">
                <div>
                    <h3>Tecnologias Detalhes</h3>
                    <button onClick={() => setIsOpen2(false)}>x</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" {...register ("title")}/>
                    <label htmlFor="status">Selecionar Status</label>
                    <select id="status" {...register ("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button>Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}
export default EditTechModal