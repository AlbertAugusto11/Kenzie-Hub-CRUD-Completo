import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserProvider } from "../../Providers/UserProvider";

export const ProtectedRoutes = () => {
    const {user} = useContext(UserProvider)

    return user ? <Outlet /> : <Navigate to="/" />
}