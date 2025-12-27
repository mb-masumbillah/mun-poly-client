import Dashboard from "../components/layout/Dashboard";
import Profile from "../components/ui/Profile/Profile";
import RegisterStudent from "../page/RegisterManagement/RegisterStudent";
import ExamControl from "../page/ExamControl/ExamControl";
import RegisterManagement from "../page/RegisterManagement/RegisterManagement";
import RegisterPayment from "../page/RegisterManagement/RegisterPayment";
import ExamRoutine from "../page/ExamControl/ExamRoutine";
import ManageSitPlane from "../page/ExamControl/ManageSitPlane";
import Assign from "../page/ExamControl/Assign";
import ProctedRoute from "../components/layout/ProctedRoute";
import InstituteManagement from "../page/InstituteManagement/InstituteManagement";
import NoticeBoard from "../page/InstituteManagement/NoticeBoard";
import StudentInfo from "../page/InstituteManagement/StudentInfo";
import InstructorInfo from "../page/InstituteManagement/InstructorInfo";
import Academic from "../page/InstituteManagement/Academic";
import AddBook from "../components/ui/LibraryManagement/AddBook";
import EditBook from "../components/ui/LibraryManagement/EditBook";
import Issue from "../page/LibraryManagement/Issue";
import Return from "../page/LibraryManagement/Return";
import Categories from "../page/LibraryManagement/Categories";
import AddDepartment from "../page/LibraryManagement/AddDepartment";
import StudentManagement from "../page/LibraryManagement/StudentManagement";
import { AddSemester } from "../page/LibraryManagement/AddSemester";
import LibraryManagement from "../page/LibraryManagement/LibraryManagement";

export const DashboardRoutes = [
    {
        path: "dashboard",
        element: <ProctedRoute> <Dashboard /> </ProctedRoute>,
        children: [
            {
                index: true,
                element: <Profile></Profile>,
            },
            {
                path: "institute-management",
                element: <InstituteManagement />,
                children: [
                    {
                        path: 'notice-board',
                        element: <NoticeBoard />
                    },
                    {
                        path: 'student-info',
                        element: <StudentInfo />
                    },
                    {
                        path: 'instructor-info',
                        element: <InstructorInfo />
                    },
                    {
                        path: 'academy',
                        element: <Academic />
                    },
                ]
            },
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
                children: [
                    {
                        path: "addbook",
                        element: <AddBook></AddBook>,
                        loader: () => fetch("/bookManagement.json"),
                    },
                    {
                        path: "editbook",
                        element: <EditBook></EditBook>,
                        loader: () => fetch("/bookManagement.json"),
                    },
                    {
                        path: "issue",
                        element: <Issue />,
                        loader: () => fetch("/bookIssueReturn.json"),
                    },
                    {
                        path: "return",
                        element: <Return />,
                        loader: () => fetch("/bookIssueReturn.json"),
                    },
                    {
                        path: "categories",
                        element: <Categories />,
                        children: [
                            {
                                path: "department",
                                element: <AddDepartment />,
                                loader: () => fetch("/addDepartment.json"),
                            },
                            {
                                path: "semester",
                                element: <AddSemester />,
                                loader: () => fetch("/addSemester.json"),
                            },
                        ],
                    },
                    {
                        path: "students",
                        element: <StudentManagement />,
                        loader: () => fetch("/studentManagement.json"),
                    },
                ],

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
    },

]
