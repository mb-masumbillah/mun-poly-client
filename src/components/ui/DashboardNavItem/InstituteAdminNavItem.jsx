import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const InstituteAdminNavItem = ({ openMenu, setOpenMenu }) => {
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const linkClass = ({ isActive }) =>
        `block w-full px-2 py-2 rounded text-sm border mb-2 border-[#006A8E] ${isActive ? "bg-[#006A8E] text-white" : "hover:bg-[#006A8E]/30"
        }`;
    return (
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
                    <NavLink to="/dashboard/institute-management/notice" className={linkClass}>
                        Notice Board
                    </NavLink>
                    <NavLink to="/dashboard/institute-management/user" className={linkClass}>
                        User Information
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default InstituteAdminNavItem;