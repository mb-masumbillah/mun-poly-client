import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayoutRoutes } from "./MainLayoutRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";
import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import ForgotPassword from "../page/Auth/ForgotPassword";
import SetNewPassword from "../page/Auth/SetNewPassword";

const router = createBrowserRouter([
    ...MainLayoutRoutes,
    ...DashboardRoutes,

    // authentication
    {
        path: "/login",
        element: localStorage.getItem("isAuthenticated") === "true"
            ? <Navigate to="/" replace />
            : <Login />
    },
    {
        path: "/register",
        element: localStorage.getItem("isAuthenticated") === "true"
            ? <Navigate to="/" replace />
            : <Register />
    },
    {
        path: "/forgot-password",
        element: localStorage.getItem("isAuthenticated") === "true"
            ? <Navigate to="/" replace />
            : <ForgotPassword />
    },
    {
        path: "/set-new-password",
        element: localStorage.getItem("isAuthenticated") === "true"
            ? <Navigate to="/" replace />
            : <SetNewPassword />
    }

])

export default router
