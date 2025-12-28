import React, { useState } from "react";
import { LucideEyeOff, X } from "lucide-react";
import ForgotPassword from "./ForgotPassword";


const ChangedPassword = ({ isOpen, onClose }) => {
  // Separate states to toggle visibility
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="px-12 pt-12 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#002B44]">Change password</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={28} className="text-orange-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-12 py-10 space-y-8">
          {/* Old Password Field */}
          <div className="flex flex-col gap-3">
            <label className="font-bold text-[#002B44]">Old Password</label>
            <div className="relative">
              <input
                type={showOld ? "text" : "password"}
                defaultValue="******"
                className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowOld(!showOld)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
              >
                <LucideEyeOff size={22} />
              </button>
            </div>
          </div>

          {/* New and Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="font-bold text-[#002B44]">New password</label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  defaultValue="******"
                  className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                >
                  <LucideEyeOff size={22} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-bold text-[#002B44]">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  defaultValue="******"
                  className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E] pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                >
                  <LucideEyeOff size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <button
              onClick={() => setIsForgotPassword(true)}
              className="text-gray-500 underline text-sm hover:text-gray-700 decoration-gray-400 underline-offset-4"
            >
              Forgot your password?
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-12 pb-14 flex justify-center gap-10">
          <button
            onClick={onClose}
            className="px-16 py-3 border border-gray-200 rounded-xl font-bold text-orange-500 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-16 py-3 bg-[#00485E] text-white rounded-xl font-bold hover:bg-[#003646] transition-all shadow-lg">
            Change
          </button>
        </div>
      </div>

      <ForgotPassword
        isOpen={isForgotPassword}
        onClose={() => setIsForgotPassword(false)}
      />
    </div>
  );
};

export default ChangedPassword;
