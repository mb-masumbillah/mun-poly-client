
import MainLayout from "../components/layout/MainLayout";
import ForgotPassword from "../page/Auth/ForgotPassword";
import Login from "../page/Auth/Login";
import Register from "../page/Auth/Register";
import SetNewPassword from "../page/Auth/SetNewPassword";
import TakeExam from "../page/ExamControl/TakeExam";
import AboutUsPage from "../page/PolytechnicManagement/AboutUsPage";
import AcademicPage from "../page/PolytechnicManagement/AcademicPage";
import AllNotice from "../page/PolytechnicManagement/AllNotice";
import ContactUsPage from "../page/PolytechnicManagement/ContactUsPage";
import CSTPage from "../page/PolytechnicManagement/CSTPage";
import Home from "../page/PolytechnicManagement/Home";
import Instructors from "../page/PolytechnicManagement/Instructors";

export const MainLayoutRoutes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'notice',
                element: <AllNotice />,
            },
            {
                path: 'about',
                element: <AboutUsPage />,
            },
            {
                path: 'contact',
                element: <ContactUsPage />,
            },
            {
                path: 'academic',
                element: <AcademicPage />,
            },
            {
                path: 'instructors',
                element: <Instructors />,
            },
            {
                path: 'cst',
                element: <CSTPage />,
            },


            // authentication
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "set-new-password",
                element: <SetNewPassword />
            },

        ],
    }
]