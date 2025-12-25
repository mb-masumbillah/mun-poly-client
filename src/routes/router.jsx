import { createBrowserRouter } from "react-router-dom";
import { MainLayoutRoutes } from "./MainLayoutRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import MainLayout from "../components/layout/MainLayout";
import App from "../App";

const router = createBrowserRouter([
    ...MainLayoutRoutes,
    ...DashboardRoutes,

])

export default router
