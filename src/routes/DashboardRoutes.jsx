import Dashboard from "../components/layout/Dashboard";
import Profile from "../components/ui/Profile";
import RegisterStudent from "../page/RegisterManagement/RegisterStudent";
import ExamControl from "../page/ExamControl/ExamControl";
import LibraryManagement from "../page/LibraryManagement/LibraryManagement";
import RegisterManagement from "../page/RegisterManagement/RegisterManagement";
import RegisterPayment from "../page/RegisterManagement/RegisterPayment";
import ExamRoutine from "../page/ExamControl/ExamRoutine";
import ManageSitPlane from "../page/ExamControl/ManageSitPlane";
import Assign from "../page/ExamControl/Assign";

export const DashboardRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Profile></Profile>,
            },
            // {
            //     path: "institute-management",
            //     element: <InstituteManagement />,
            // },
            {
                path: "register-management",
                element: <RegisterManagement />,
                children: [
                    {
                        path: "register-student",
                        element: <RegisterStudent />,
                    },
                    {
                        path: "register-payment",
                        element: <RegisterPayment />,
                    }
                ]
            },
            {
                path: "library-management",
                element: <LibraryManagement />,
            },
            {
                path: "exam-control",
                element: <ExamControl />,
                children: [
                    {
                        path: "exam-routine",
                        element: <ExamRoutine />,
                    },
                    {
                        path: "managem-sit-plane",
                        element: <ManageSitPlane />,
                    },
                    {
                        path: "assign",
                        element: <Assign />,
                    }
                ]
            },
        ]
    }
]