import React from "react";

const StudentDetailsForm = ({student}) => {
  if (!student) return null;
  

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 rounded-lg">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl sm:text-xl font-semibold text-center sm:text-left w-full sm:w-auto">
          Students Application Details
        </h2>
      </div>

      {/* Application Info */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-sm font-semibold text-gray-500 mb-3">Application Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: "Department", value: student.department },
            { label: "Shift", value: student.shift },
            { label: "Semester", value: student.semester },
            { label: "Date", value: student.date, type: "date" },
            { label: "Phone", value: student.phoneNumber },
            { label: "Email", value: student.email, type: "email" },
          ].map((item) => (
            <div key={item.label}>
              <label className="block text-sm font-medium text-gray-700">{item.label}</label>
              <input
                type={item.type || "text"}
                value={item.value || ""}
                readOnly
                className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Personal Info */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-sm font-semibold text-gray-500 mb-3">Personal Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: "Name", value: student.name },
            { label: "Father’s Name", value: student.fatherName },
            { label: "Mother’s Name", value: student.motherName },
            { label: "Address (Present)", value: student.addressPresent },
            { label: "Address (Permanent)", value: student.addressPermanent },
            { label: "Nationality", value: student.nationality },
            { label: "Date of Birth", value: student.dob, type: "date" },
            { label: "Religion", value: student.religion },
          ].map((item) => (
            <div key={item.label}>
              <label className="block text-sm font-medium text-gray-700">{item.label}</label>
              <input
                type={item.type || "text"}
                value={item.value || ""}
                readOnly
                className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Academic Info */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-sm font-semibold text-gray-500 mb-3">Academic Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: "SSC/HSC Roll", value: student.sscRoll },
            { label: "SSC/HSC Registration No.", value: student.sscRegNo },
            { label: "Board", value: student.board },
            { label: "Group", value: student.group },
            { label: "GPA", value: student.gpa },
            { label: "School/College Name", value: student.schoolCollege },
            { label: "Passing Year", value: student.passingYear },
          ].map((item) => (
            <div key={item.label}>
              <label className="block text-sm font-medium text-gray-700">{item.label}</label>
              <input
                type="text"
                value={item.value || ""}
                readOnly
                className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="space-y-2">
        {["SSC Certificate", "Birth Certificate", "NID"].map((doc) => (
          <div
            key={doc}
            className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3 bg-gray-100 px-4 py-3 rounded text-center sm:text-left"
          >
            <span className="w-full sm:w-auto font-medium">{doc}</span>
            <button className="bg-[#00455D] text-white px-3 py-1 rounded w-full sm:w-auto">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetailsForm;
