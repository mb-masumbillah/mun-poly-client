import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

const SetNewPassword = ({ isOpen, onClose }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // update the password
    console.log("Password Change Submitted");
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="px-12 pt-12 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#002B44]">
            Set New password
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={28} className="text-orange-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-12 py-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Enter New Password */}
              <div className="flex flex-col gap-3">
                <label className="font-bold text-[#002B44] text-base">
                  Enter new Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="******"
                    className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E] pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                  >
                    {showNewPassword ? <Eye size={22} /> : <EyeOff size={22} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-3">
                <label className="font-bold text-[#002B44] text-base">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="******"
                    className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E] pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <Eye size={22} />
                    ) : (
                      <EyeOff size={22} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-10 pb-4">
              <button
                type="button"
                onClick={onClose}
                className="px-20 py-3 border border-gray-200 rounded-xl font-bold text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-20 py-3 bg-[#00485E] text-white rounded-xl font-bold hover:bg-[#003646] transition-all shadow-lg active:scale-95"
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
