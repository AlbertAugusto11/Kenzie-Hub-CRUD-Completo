import { useForm } from "react-hook-form"

export const EditTechModal = () => {
    const {register, reset, handleSubmit} = useForm({
        values:{

        }
    })

    return(
        <>
            <div>
                <h3>Tecnologias Detalhes</h3>
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
                <button>Salvar alterações</button>
            </form>
        </>
    )
}
export default EditTechModal