import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { UserProvider } from "../../Providers/UserProvider"



export const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const userLogin = useContext(UserProvider)
    
    const submit = (formData) => {
        userLogin(formData)
    } 

    
    return (
        <>
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
        
        </>
    )
}
export default LoginPage