import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Providers/UserContext"

export const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const { userLogin } = useContext(UserContext)

    const submit = async (formData) => {
        userLogin(formData)
    } 

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <img src="./src/Img/Logo.png" alt="LOGO" />
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Digite seu Email" {...register ("email")}/>
                <label htmlFor="password">Senha</label>
                <input id="password" type="text" placeholder="Digite sua Senha" {...register ("password")}/>
                <button>Entrar</button>

            </form>
            <div>
                <p>Ainda não possui conta?</p>
                <button onClick={() => navigate("/register")}>Cadastre-se</button>
            </div>
        
        </div>
    )
}
export default LoginPage