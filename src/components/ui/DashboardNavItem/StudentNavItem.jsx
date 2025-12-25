import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const StudentNavItem = ({ openMenu, setOpenMenu }) => {
      const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const linkClass = ({ isActive }) =>
    `block w-full px-2 py-2 rounded text-sm border mb-2 border-[#006A8E] ${
      isActive ? "bg-[#006A8E] text-white" : "hover:bg-[#006A8E]/30"
    }`;
    return (
        <div>
            
        </div>
    );
};

export default StudentNavItem;