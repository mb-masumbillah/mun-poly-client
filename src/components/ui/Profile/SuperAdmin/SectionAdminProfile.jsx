import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AtikurImg from "../../../../assets/atikur.jpg";
import SagorImg from "../../../../assets/sagor.png";
import MahiImg from "../../../../assets/mahi.png";
import MasumImg from "../../../../assets/masum.png";
import RemoveSubAdmin from "./RemoveSubAdmin";

const SectionAdminProfile = () => {
  const navigate = useNavigate();
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const admins = [
    {
      id: 1,
      name: "Atikur Rahman Ashik",
      email: "atikir@email.com",
      role: "Institute Management",
      img: AtikurImg,
    },
    {
      id: 2,
      name: "Sagor Robi",
      email: "sagor@email.com",
      role: "Register Management",
      img: SagorImg,
    },
    {
      id: 3,
      name: "Md Akhil",
      email: "mahi@email.com",
      role: "Library Management",
      img: MahiImg,
    },
    {
      id: 4,
      name: "Masum Billah",
      email: "masum@email.com",
      role: "Exam Control",
      img: MasumImg,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 m-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#002B44] mb-6">
        Section Admin Profile
      </h2>

      <div className="space-y-4">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={admin.img}
                alt={admin.name}
                className="w-16 h-16 rounded-lg object-cover border border-gray-200"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">
                  {admin.name}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  {admin.email}
                </span>
                <span className="text-xs text-gray-500 mt-1">{admin.role}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/dashboard/section-admin")}
                className="px-8 py-2 bg-[#00485E] text-white rounded-lg font-bold text-sm hover:bg-[#003646] transition-colors cursor-pointer min-w-[120px]"
              >
                Profile
              </button>
              <button
                onClick={() => setIsOpenRemoveModal(true)}
                className="px-8 py-2 bg-[#FF4D4D] text-white rounded-lg font-bold text-sm hover:bg-red-600 transition-colors min-w-[120px]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <RemoveSubAdmin
        isOpen={isOpenRemoveModal}
        onClose={() => setIsOpenRemoveModal(false)}
      ></RemoveSubAdmin>
    </div>
  );
};

export default SectionAdminProfile;
