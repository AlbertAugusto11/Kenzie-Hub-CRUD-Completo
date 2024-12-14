import { Route, Routes } from "react-router-dom"
import LoginPage from "../Pages/LoginPage/LoginPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import { ProtectedRoutes } from "../Components/ProtectRoutes"
import {HomePage} from "../Pages/HomePage/HomePage"

export const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/home" element={<ProtectedRoutes />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}