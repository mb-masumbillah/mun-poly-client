import SuperAdminProfile from "./SuperAdminProfile";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";
import { useState } from "react";

const Profile = () => {
    const [role] = useState(localStorage.getItem("userRole"));

    console.log(role)

    return (
        <div>
            <h2 className="text-2xl font-bold">Welcome to your profile</h2>
            {role === "admin" && <SuperAdminProfile />}
            {role === "instituteAdmin" && <AdminProfile />}
            {role === "registerAdmin" && <AdminProfile />}
            {role === "libraryAdmin" && <AdminProfile />}
            {role === "examControlAdmin" && <AdminProfile />}
            {role === "student" && <StudentProfile />}
            {role === "teacher" && <TeacherProfile />}
        </div>
    );
};

export default Profile;