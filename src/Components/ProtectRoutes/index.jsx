import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";

export const ProtectedRoutes = () => {
    const {user} = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/" />
}