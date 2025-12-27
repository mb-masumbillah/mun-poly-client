import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SuperAdminNavItem = ({ openMenu, setOpenMenu }) => {
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
    <div>
      <NavLink to="/dashboard" end className={({ isActive }) => navClass(isActive)}>
        <span>Dashboard</span> <ChevronRight />
      </NavLink>

      {/* Institute Management */}
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

      {/* Register Management */}
      <div>
        <button
          onClick={() => toggleMenu("register")}
          className={`w-full px-3 py-2 flex justify-between items-center rounded-tl rounded-tr mt-2 ${openMenu === "register"
            ? "bg-[#00455D] text-white"
            : "hover:bg-[#e0f0f7]"
            }`}
        >
          <span>Register Management</span>
          <ChevronDown className="transition-transform rotate-0" />
        </button>

        {openMenu === "register" && (
          <div className="bg-[#00455D] text-white rounded-b px-5 py-2">
            <NavLink to="/dashboard/register-management/register-student" className={linkClass}>
              Student
            </NavLink>
            <NavLink to="/dashboard/register-management/register-payment" className={linkClass}>
              Payment
            </NavLink>
          </div>
        )}
      </div>

      {/* Library Management */}
      <div>
        <button
          onClick={() => toggleMenu("library")}
          className={`w-full px-3 py-2 flex justify-between items-center rounded-tl rounded-tr mt-2 ${openMenu === "library"
            ? "bg-[#00455D] text-white"
            : "hover:bg-[#e0f0f7]"
            }`}
        >
          <span>Library Management</span>
          <ChevronDown className="transition-transform rotate-0" />
        </button>

        {openMenu === "library" && (
          <div className="bg-[#00455D] text-white rounded-b px-5 py-2">
            <NavLink to="/dashboard/library-management/addbook" className={linkClass}>
              Add Book
            </NavLink>
            <NavLink to="/dashboard/library-management/editbook" className={linkClass}>
              Edit Book
            </NavLink>
            <NavLink to="/dashboard/library-management/issue" className={linkClass}>
              Issue
            </NavLink>
            <NavLink to="/dashboard/library-management/return" className={linkClass}>
              Return
            </NavLink>
            <NavLink to="/dashboard/library-management/categories/department" className={linkClass}>
              Add Department
            </NavLink>
            <NavLink to="/dashboard/library-management/categories/semester" className={linkClass}>
              Add Semester
            </NavLink>
            <NavLink to="/dashboard/library-management/students" className={linkClass}>
              Student Management
            </NavLink>
          </div>
        )}
      </div>

      {/* Exam Control */}
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
    </div>
  );
};

export default SuperAdminNavItem;
