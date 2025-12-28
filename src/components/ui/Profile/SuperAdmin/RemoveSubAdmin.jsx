import React from 'react';
import { X } from 'lucide-react';

const RemoveSubAdmin = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Icon */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-red-50 rounded-lg transition-colors group"
        >
          <X size={24} className="text-white bg-[#FF5A4D] rounded-md p-0.5 group-hover:scale-110 transition-transform" />
        </button>

        <div className="p-6 flex flex-col items-center text-center">
          {/* Warning Title */}
          <h2 className="text-3xl font-bold text-[#FF8A75] mb-10">
            Remove Section Admin
          </h2>

          {/* Action Buttons */}
          <div className="flex gap-6 w-full justify-center">
            <button 
              onClick={onClose}
              className="px-10 py-2.5 border border-gray-300 rounded-xl font-semibold text-gray-500 hover:bg-gray-50 transition-colors min-w-[120px]"
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm}
              className="px-10 py-2.5 bg-[#FF5A4D] text-white rounded-xl font-semibold hover:bg-[#e64a3d] transition-all shadow-md active:scale-95 min-w-[120px]"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveSubAdmin;