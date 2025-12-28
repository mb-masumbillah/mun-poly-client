import React, { useState } from "react";
import AtikurImg from "../../../assets/atikur.jpg";
import { LucideEyeOff } from "lucide-react";
import SectionAdminEditInfo from "./SuperAdmin/SectionAdmin/SectionAdminEditInfo";
import ChangePassword from "./SuperAdmin/SectionAdmin/ChangePassword";


const AdminProfile = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-lg font-bold text-[#002B44] mb-6">
                Section Admin Profile
            </h2>

            <div className="flex items-center justify-between my-10 ">
                <div className="flex items-center gap-5">
                    <img
                        src={AtikurImg}
                        className="w-24 h-24 rounded-2xl object-cover"
                        alt="Profile"
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-[#002B44]">Atikur rahman</h3>
                        <p className="text-gray-400">atikur@gmail.com</p>
                    </div>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-10 py-3 bg-[#00485E] text-white cursor-pointer rounded-lg font-bold"
                >
                    Edit Profile
                </button>
            </div>

            {/* Form Fields Section */}
            <form className="space-y-8">
                {/* Admin Name Field */}
                <div className="flex flex-col gap-3">
                    <label className="font-bold text-[#002B44] text-base">
                        Admin Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Atikur Rahman"
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-1 focus:ring-[#00485E] outline-none text-gray-700 bg-white"
                    />
                </div>

                {/*  Email and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-[#002B44] text-base">Email</label>
                        <input
                            type="email"
                            defaultValue="atikur@email.com"
                            className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-700"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-[#002B44] text-base">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            defaultValue="0123456789"
                            className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-700"
                        />
                    </div>
                </div>

                {/* Password and Change Button Section */}
                <div className="flex flex-col gap-3">
                    <label className="font-bold text-[#002B44] text-base">Password</label>
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="relative flex-1 w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                defaultValue="******"
                                className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-700 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <LucideEyeOff size={22} />
                            </button>
                        </div>
                        <button
                            onClick={() => setIsPasswordModalOpen(true)}
                            type="button"
                            className="w-full md:w-auto cursor-pointer px-16 py-4 bg-[#00485E] text-white rounded-xl font-bold text-lg hover:bg-[#003646] transition-colors shadow-md"
                        >
                            Change
                        </button>
                    </div>
                </div>
            </form>

            <SectionAdminEditInfo
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <ChangePassword
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
            />
        </div>
    );
};

export default AdminProfile;