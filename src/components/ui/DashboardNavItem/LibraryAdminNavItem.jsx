import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";


const LibraryAdminNavItem = ({ openMenu, setOpenMenu }) => {
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
    </>
  );
};

export default LibraryAdminNavItem;