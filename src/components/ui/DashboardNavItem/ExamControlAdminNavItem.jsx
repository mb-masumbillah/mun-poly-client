import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";


const ExamControlAdminNavItem = ({ openMenu, setOpenMenu }) => {
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const linkClass = ({ isActive }) =>
        `block w-full px-2 py-2 rounded text-sm border mb-2 border-[#006A8E] ${isActive ? "bg-[#006A8E] text-white" : "hover:bg-[#006A8E]/30"
        }`;
    return (
        <div>
            <button
                onClick={() => toggleMenu("exam")}
                className={`w-full px-3 py-2 flex justify-between items-center rounded-tl rounded-tr mt-2 ${openMenu === "exam"
                        ? "bg-[#00455D] text-white"
                        : "hover:bg-[#e0f0f7]"
                    }`}
            >
                <span>Exam Control</span>
                <ChevronDown className="transition-transform rotate-0" />
            </button>

            {openMenu === "exam" && (
                <div className="bg-[#00455D] text-white rounded-b px-5 py-2">
                    <NavLink to="/dashboard/exam-control/exam-routine" className={linkClass}>
                        Exam Routine
                    </NavLink>
                    <NavLink to="/dashboard/exam-control/managem-sit-plane" className={linkClass}>
                        Manage Sit Plan
                    </NavLink>
                    <NavLink to="/dashboard/exam-control/assign" className={linkClass}>
                        Assign
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default ExamControlAdminNavItem;