import { useRef } from "react";

const FileUploadBox = ({ onFile }) => {
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    onFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="w-full max-w-3xl mx-auto border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-white"
    >
      <div className="text-gray-500 mb-3">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 4v8m0 0l4-4m-4 4l-4-4"/>
        </svg>
      </div>

      <p className="text-gray-500 text-lg font-medium mb-1">Drop file or browse</p>
      <p className="text-gray-400 text-sm mb-4">Format: .jpeg, .png, PDF, Excel, Word & Max file size: 25 MB</p>

      <input
        type="file"
        ref={inputRef}
        onChange={(e) => onFile(e.target.files[0])}
        className="hidden"
        accept=".xlsx,.xls,.csv,.pdf,.doc,.docx,.png,.jpg,.jpeg"
      />

      <button
        onClick={() => inputRef.current.click()}
        className="bg-[#00455D] text-white px-6 py-2 rounded-md font-semibold shadow-md hover:opacity-90"
      >
        Browse Files
      </button>
    </div>
  );
};

export default FileUploadBox;
