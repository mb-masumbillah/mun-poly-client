import React, { useState } from "react";
import { X } from "lucide-react";
import NewPassword from "./NewPassword";


const EnterOtp = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState("");
  const [isOtp, setIsOtp] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // verify OTP
    console.log("OTP Submitted:", otp);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="px-10 pt-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#002B44]">Enter OTP</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={28} className="text-orange-500" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-10 py-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-3">
              <label className="font-bold text-[#002B44] text-base">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="1234"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E]"
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-8 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-14 py-3 border border-gray-200 rounded-xl font-bold text-orange-500 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOtp(true)}
                type="submit"
                className="px-14 py-3 bg-[#00485E] text-white rounded-xl font-bold hover:bg-[#003646] transition-all shadow-lg active:scale-95"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <NewPassword isOpen={isOtp} onClose={() => setIsOtp(false)} />
    </div>
  );
};

export default EnterOtp;
