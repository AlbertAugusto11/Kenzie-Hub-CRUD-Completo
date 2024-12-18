import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ValidAcess } from "../../Components/ValidAcess"
import { UserContext } from "../../Providers/UserContext"
import "../../Styles/registerPage.scss"

export const RegisterPage = () => {
    const {register,reset,handleSubmit} = useForm()
    const navigate = useNavigate()
    const { logado, registerUser } = useContext(UserContext)

    const submit = async (formData) => {
        if(formData.password.length == 6 && formData.password == formData.Rpassword){
            const newForm = {...formData}
            delete newForm.Rpassword
            registerUser(newForm) 
        }else if(formData.password.length != 6){
            alert("A senha precisa ter 6 caracteres")
            reset()
        }else if(formData.password != formData.Rpassword){
           alert("As senhas precisam ser iguais")
           reset()
        }
    }

    return (
        <div className="register__Page">
            <div className="div__img">
                <img src="./src/Img/Logo.png" alt="LOGO" />
                <button className="button__div" onClick={() => navigate("/")}>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Crie sua Conta</h1>
                <span>Rápido e grátis, vamos nessa.</span>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" placeholder="Digite seu nome" {...register ("name")} required/>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Digite seu email" {...register ("email")} required/>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="Digite sua senha" {...register ("password")} required/>
                <label htmlFor="Rpassword">Confirmar Senha</label>
                <input id="Rpassword" type="password" placeholder="Digite novamente sua senha" {...register ("Rpassword")} required/>
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
                <button className="button__Register">Cadastrar</button>
            </form>
            {logado !== null  ?  <ValidAcess/> : null}
        </div>
    )
}
export default RegisterPage