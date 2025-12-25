import React from "react";

const StudentDetailsForm = () => {
  return (
    <div className="max-w-4xl mx-auto  p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Students Application Details</h2>
      </div>

      {/* Application Info */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Application Info</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Shift</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Semester</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Personal Info</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Father’s Name</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mother’s Name</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address (Present)</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address (Permanent)</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nationality</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Religion</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Academic Info</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">SSC/HSC Roll</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">SSC/HSC Registration No.</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Board</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Group</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">GPA</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">School/College Name</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Passing Year</label>
            <input type="text" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-2">
        {["SSC Certificate", "Birth Certificate", "NID"].map((doc) => (
          <div key={doc} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
            <span>{doc}</span>
            <button className="bg-[#00455D] text-white px-3 py-1 rounded">Download</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetailsForm;
