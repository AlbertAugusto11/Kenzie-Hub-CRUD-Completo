import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../Providers/TechContext"
import { pressOut } from "../hooksCustomized/pressOut.js"
import { pressKey } from "../hooksCustomized/pressKey.js"
import "../Styles/modalCreate.scss"

export const CreateTechModal = () => {
    const {register, reset, handleSubmit} = useForm()
    const {setIsOpen1, createTech} = useContext(TechContext)

    const submit = async (formData) =>{
        createTech(formData)
        reset()
    }
    const modalRef = pressOut(() =>{
        setIsOpen1(false)
    })
    const buttonRef = pressKey("Escape")


    return(
        <div className="modalOverlay" role="dialog">
            <div ref={modalRef} className="box__ModalCreate">
                <div>
                    <h3>Cadastrar Tecnologias</h3>
                    <button ref={buttonRef} onClick={() => setIsOpen1(false)}>X</button>
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
                    <button>Cadastrar Tecnologias</button>
                </form>
            </div>
        </div>
    )
}
export default CreateTechModal