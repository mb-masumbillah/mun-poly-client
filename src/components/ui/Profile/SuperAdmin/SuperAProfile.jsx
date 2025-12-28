
import SuperAdminImg from "../../../../assets/super-admin.png";
import { Link } from "react-router";
import { LucideEyeOff } from "lucide-react";

const SuperAProfile = () => {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-lg font-bold text-[#002B44]">
        Super Admin Dashboard
      </h2>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Profile Section */}
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src={SuperAdminImg}
              alt="Admin"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold text-[#002B44]">
                Md. Tanvir Shekh
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                tanvirshekh.dev@gmail.com
              </p>
            </div>
          </div>
          <Link
            to={"/dashboard/super-admin"}
            className="px-10 py-2.5 bg-[#00485E] text-white rounded-lg font-bold text-sm hover:bg-[#003646] transition-colors"
          >
            Profile
          </Link>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-[#002B44] mb-8">
            Add Section Admin
          </h3>

          <form className="grid grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44] text-sm">Name</label>
              <input
                type="text"
                placeholder="Tanvir Ahmed"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#00485E] outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44] text-sm">Role</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none outline-none">
                <option>Institute Management</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44] text-sm">Email</label>
              <input
                type="email"
                placeholder="tanvirahmed@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44] text-sm">
                Contact Number
              </label>
              <input
                type="text"
                placeholder="01707******"
                className="w-full p-3 border border-gray-300 rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="font-bold text-[#002B44] text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="******"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                />
                <LucideEyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="font-bold text-[#002B44] text-sm">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="******"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none"
                />
                <LucideEyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="col-span-2 pt-4">
              <button className="px-8 py-3 bg-[#00485E] text-white rounded-lg font-bold text-sm hover:bg-[#003646] transition-colors">
                Add Section Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperAProfile;
