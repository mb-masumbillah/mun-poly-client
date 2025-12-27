import useAuth from "@/hooks/useAuth";
import SuperAdminProfile from "./SuperAdminProfile";
import AdminProfile from "./AdminProfile";
import StudentProfile from "./StudentProfile";
import TeacherProfile from "./TeacherProfile";

const Profile = () => {
    const { role } = useAuth()

    // console.log(role)

    return (
        <div>
            <h2 className="text-2xl font-bold">Welcome to your profile</h2>
            {role === "admin" && <SuperAdminProfile />}
            {role === "instituteAdmin" && role === "registerAdmin" && role === "libraryAdmin" && role === "examControlAdmin" && <AdminProfile />}
            {role === "student" && <StudentProfile />}
            {role === "teacher" && <TeacherProfile />}
        </div>
    );
};

export default Profile;