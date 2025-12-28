import React, { useState, useRef } from "react";
import { X, UploadCloud } from "lucide-react";

const SectionAdminEditInfo = ({ isOpen, onClose }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image and reset
  const handleRemoveImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="px-10 pt-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#002B44]">
            Edit Profile Info
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={28} className="text-orange-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form Fields Section */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44]">Name</label>
              <input
                type="text"
                defaultValue="Md. Tanvir Shekh"
                className="w-full p-3 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44]">Email</label>
              <input
                type="email"
                defaultValue="tanvirshekh.dev@gmail.com"
                className="w-full p-3 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-[#002B44]">Contact Number</label>
              <input
                type="text"
                defaultValue="01707*******"
                className="w-full p-3 border border-gray-200 rounded-xl outline-none text-gray-400 focus:ring-1 focus:ring-[#00485E]"
              />
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="space-y-4">
            <label className="font-bold text-[#002B44] ">Profile Image</label>

            {/* Upload Area */}
            <div className="border border-gray-200 rounded-2xl mt-2 p-8 flex flex-col items-center justify-center text-center space-y-3 bg-white">
              <UploadCloud size={36} className="text-gray-700" />
              <p className="font-semibold text-gray-800">Drop file or browse</p>
              <p className="text-[10px] text-gray-400">
                Format: .jpeg, .png & Max file size: 25 MB
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="mt-2 px-8 py-2 bg-[#00485E] text-white text-xs font-bold rounded-lg hover:bg-[#003646] transition-colors"
              >
                Browse Files
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>

            {/* Preview Area  */}
            <div className="relative w-44 h-28 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center">
              {previewImage ? (
                <>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-1 right-1 bg-white/90 hover:bg-white p-0.5 rounded shadow-sm text-red-500"
                  >
                    <X size={14} />
                  </button>
                </>
              ) : (
                <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]" />
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-10 pb-12 flex justify-center gap-8">
          <button
            onClick={onClose}
            className="px-16 py-3 border border-gray-200 rounded-xl font-bold text-orange-500 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-16 py-3 bg-[#00485E] text-white rounded-xl font-bold hover:bg-[#003646] transition-all shadow-xl active:scale-95">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionAdminEditInfo;
