import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Providers/UserContext"
import  Logo  from "../../Img/Logo.png"
import "../../Styles/loginPage.scss"

export const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const { userLogin } = useContext(UserContext)

    const submit = async (formData) => {
        userLogin(formData)
    } 

    return (
        <div className="login__Page">
            <img src={Logo} alt="LOGO" />
            <form onSubmit={handleSubmit(submit)}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Digite seu Email" {...register ("email")}/>
                <label htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="Digite sua Senha" {...register ("password")}/>
                <button className="button__login">Entrar</button>
                <div className="div__form">
                    <span>Ainda não possui conta?</span>
                    <button className="button__register" onClick={() => navigate("/register")}>Cadastre-se</button>
                </div>
            </form>
        </div>
    )
}
export default LoginPage