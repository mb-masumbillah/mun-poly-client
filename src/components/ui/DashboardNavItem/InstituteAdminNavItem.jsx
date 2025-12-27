import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const InstituteAdminNavItem = ({ openMenu, setOpenMenu }) => {
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const linkClass = ({ isActive }) =>
        `block w-full px-2 py-2 rounded text-sm border mb-2 border-[#006A8E] ${isActive ? "bg-[#006A8E] text-white" : "hover:bg-[#006A8E]/30"
        }`;
    const navClass = (isActive) =>
        `px-3 py-2 rounded flex justify-between items-center ${isActive
            ? "text-white bg-[#00455D]"
            : "text-[#00202E] hover:bg-[#e0f0f7]"
        }`;

    return (
        <>
            <NavLink to="/dashboard" end className={({ isActive }) => navClass(isActive)}>
                <span>Dashboard</span> <ChevronRight />
            </NavLink>

            <div>
                <button
                    onClick={() => toggleMenu("institute")}
                    className={`w-full px-3 py-2 flex justify-between items-center rounded-tl rounded-tr mt-2 ${openMenu === "institute"
                        ? "bg-[#00455D] text-white"
                        : "hover:bg-[#e0f0f7]"
                        }`}
                >
                    <span>Institute Management</span>
                    <ChevronDown className="transition-transform rotate-0" />
                </button>

                {openMenu === "institute" && (
                    <div className="bg-[#00455D] text-white rounded-b px-5 py-2">
                        <NavLink to="/dashboard/institute-management/notice-board" className={linkClass}>
                            Notice Board
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/student-info" className={linkClass}>
                            Student Info
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/instructor-info" className={linkClass}>
                            Instructor Info
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/academy" className={linkClass}>
                            Academy
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/a" className={linkClass}>
                            Instructor List
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/b" className={linkClass}>
                            Club Info
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/c" className={linkClass}>
                            Contact
                        </NavLink>
                        <NavLink to="/dashboard/institute-management/d" className={linkClass}>
                            About Us
                        </NavLink>
                    </div>
                )}
            </div>
        </>
    );
};

export default InstituteAdminNavItem;