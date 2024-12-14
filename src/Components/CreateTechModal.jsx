import { useForm } from "react-hook-form"

export const CreateTechModal = () => {
    const {register, reset, handleSubmit} = useForm()

    return(
        <>
            <div>
                <h3>Cadastrar Tecnologias</h3>
                <button>x</button>
            </div>
            <form>
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
        </>
    )
}
export default CreateTechModal