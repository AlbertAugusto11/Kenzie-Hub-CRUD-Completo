import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserProvider } from "../../Providers/UserProvider"
import { ValidAcess } from "../../Components/ValidAcess"

export const RegisterPage = () => {
    const {register,reset,handleSubmit} = useForm()
    const navigate = useNavigate()

    const userRegister = useContext(UserProvider)
    const inLog = useContext(UserProvider)

    const submit = (formData) => {
        if(formData.password.length = 6 && formData.password == formData.Rpassword){
            newForm = {...formData}
            delete newForm.Rpassword
            userRegister(newForm)
        }else{
            alert("A senha precisa ter 6 caracteres")
        }
        reset()
    }

    return (
        <>
            <div>
                <img src="./src/Img/Logo.png" alt="LOGO" />
                <button onClick={() => navigate("/")}>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h1>Crie sua Conta</h1>
                    <p>Rápido e grátis, vamos nessa.</p>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Digite seu nome" {...register ("name")}/>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Digite seu email" {...register ("email")}/>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="text" placeholder="Digite sua senha" {...register ("password")}/>
                    <label htmlFor="Rpassword">Confirmar Senha</label>
                    <input id="Rpassword" type="text" placeholder="Digite novamente sua senha" {...register ("Rpassword")}/>
                    <label htmlFor="bio">Bio</label>
                    <input id="bio" type="text" placeholder="Fale sobre você" {...register ("bio")}/>
                    <label htmlFor="contact">Contato</label>
                    <input id="contact" type="text" placeholder="Opção de Contato" {...register ("contact")}/>
                    <label htmlFor="modulo">Selecionar módulo</label>
                    <select id="modulo" {...register ("course_module")}>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                    </select>
                    <button>Cadastrar</button>                       
                </div>
                {inLog ?  <ValidAcess/> : null}
            </form>
        </>
    )
}
export default RegisterPage