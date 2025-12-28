import { ChevronRight, Home, LogOut, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SuperAdminNavItem from "../ui/DashboardNavItem/SuperAdminNavItem";
import InstituteAdminNavItem from "../ui/DashboardNavItem/InstituteAdminNavItem";
import RegisterAdminNavItem from "../ui/DashboardNavItem/RegisterAdminNavItem";
import LibraryAdminNavItem from "../ui/DashboardNavItem/LibraryAdminNavItem";
import ExamControlAdminNavItem from "../ui/DashboardNavItem/ExamControlAdminNavItem";
import StudentNavItem from "../ui/DashboardNavItem/StudentNavItem";
import TeacherNavItem from "../ui/DashboardNavItem/TeacherNavItem";
import useAuth from "../../hooks/useAuth";


const Dashboard = () => {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(null);
    const [designation] = useState(localStorage.getItem("userRole"));
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate()
    const { logout } = useAuth()

    let headerTitle = "Profile";

    if (location.pathname.startsWith("/dashboard/register-management")) {
        headerTitle = "Register Management System";
    } else if (location.pathname.startsWith("/dashboard/library-management")) {
        headerTitle = "Library Management System";
    } else if (location.pathname.startsWith("/dashboard/exam-control")) {
        headerTitle = "Exam Control System";
    } else if (location.pathname.startsWith("/dashboard/institute-management")) {
        headerTitle = "Institute Management System";
    }

    const handleLogout = () => {
        logout()
        navigate("/", { replace: true });
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Mobile Sidebar Button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-5 left-5 z-50 bg-white p-2 rounded shadow border"
            >
                <Menu />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 border-r border-gray-300 bg-white z-40 transform transition-transform duration-300 flex flex-col overflow-hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >

                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden absolute top-5 right-5 bg-gray-100 p-2 rounded"
                >
                    <X />
                </button>

                <div className="border border-gray-300 py-4 flex justify-center">
                    <Link to="/">
                        <img src="/logo.png" alt="Logo" />
                    </Link>
                </div>  

                <div className="p-4 pt-8 pl-0 space-y-3 w-full flex-1 overflow-y-auto">

                    {designation === "admin" && (
                        <SuperAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    )}

                    {designation === "instituteAdmin" && (
                        <InstituteAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    )}

                    {designation === "registerAdmin" && (
                        <RegisterAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    )}

                    {designation === "libraryAdmin" && (
                        <LibraryAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    )}

                    {designation === "examControlAdmin" && (
                        <ExamControlAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    )}

                    {designation === "student" && (
                        <StudentNavItem />
                    )}

                    {designation === "teacher" && (
                        <TeacherNavItem />
                    )}
                </div>

                <NavLink to="/" className="flex cursor-pointer items-center gap-3 py-4 border-t px-3 border-gray-300">
                    <Home className="" />
                    <span>Go To Home</span>
                </NavLink>
                <button onClick={handleLogout} className="flex cursor-pointer items-center gap-3 py-4 px-3 border-gray-300">
                    <LogOut className="text-red-500" />
                    <span>Log Out</span>
                </button>


            </aside>

            {/* Main Content */}
            <main
                className="flex-1 h-full overflow-y-auto 
                ml-0 lg:ml-64 transition-all duration-300"
            >
                <div
                    className="pb-6 pl-6 pt-6 border-b border-gray-300 text-2xl font-bold bg-white sticky top-0 
                    pl-16 lg:pl-6"
                >
                    {headerTitle}
                </div>

                <div className="p-6">
                    <Outlet />
                </div>
            </main>

            {/* Overlay when sidebar open (mobile) */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/30 lg:hidden z-30"
                ></div>
            )}
        </div>
    );
};

export default Dashboard;
