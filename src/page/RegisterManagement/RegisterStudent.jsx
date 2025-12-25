import { useState } from "react";
import { FileEdit, Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";
import StudentDetailsForm from "../../components/ui/RegisterSystem/StudentDetailsForm";

const students = [
    {
        id: 1,
        name: "Masum Billah",
        fatherName: "Abdul Billah",
        motherName: "Fatema Begum",
        phoneNumber: "01712345678",
        email: "masum@example.com",
        department: "CST",
        shift: "Day",
        semester: "1st",
        date: "2025-01-01",
        addressPresent: "Munshiganj",
        addressPermanent: "Munshiganj",
        nationality: "Bangladeshi",
        dob: "2005-05-15",
        religion: "Islam",
        sscRoll: "123456",
        sscRegNo: "654321",
        board: "Dhaka",
        group: "Science",
        gpa: "5.00",
        schoolCollege: "Munshiganj High School",
        passingYear: "2021"
    },
    {
        id: 2,
        name: "Anika Rahman",
        fatherName: "Rahim Uddin",
        motherName: "Selina Rahman",
        phoneNumber: "01787654321",
        email: "anika@example.com",
        department: "ET",
        shift: "Day",
        semester: "2nd",
        date: "2025-02-01",
        addressPresent: "Dhaka",
        addressPermanent: "Gazipur",
        nationality: "Bangladeshi",
        dob: "2004-10-20",
        religion: "Islam",
        sscRoll: "223344",
        sscRegNo: "443322",
        board: "Dhaka",
        group: "Science",
        gpa: "4.90",
        schoolCollege: "Dhaka High School",
        passingYear: "2020"
    },
    {
        id: 3,
        name: "Rashed Khan",
        fatherName: "Jamal Khan",
        motherName: "Rina Khan",
        phoneNumber: "01812345678",
        email: "rashed@example.com",
        department: "MT",
        shift: "Day",
        semester: "3rd",
        date: "2025-03-01",
        addressPresent: "Chittagong",
        addressPermanent: "Chittagong",
        nationality: "Bangladeshi",
        dob: "2003-08-12",
        religion: "Islam",
        sscRoll: "334455",
        sscRegNo: "554433",
        board: "Chittagong",
        group: "Commerce",
        gpa: "4.80",
        schoolCollege: "Chittagong College",
        passingYear: "2019"
    },
    {
        id: 4,
        name: "Sadia Akter",
        fatherName: "Abul Hossain",
        motherName: "Jannatul Akter",
        phoneNumber: "01987654321",
        email: "sadia@example.com",
        department: "CST",
        shift: "Evening",
        semester: "1st",
        date: "2025-01-15",
        addressPresent: "Narayanganj",
        addressPermanent: "Munshiganj",
        nationality: "Bangladeshi",
        dob: "2005-07-05",
        religion: "Islam",
        sscRoll: "445566",
        sscRegNo: "665544",
        board: "Dhaka",
        group: "Science",
        gpa: "5.00",
        schoolCollege: "Narayanganj High School",
        passingYear: "2021"
    },
    {
        id: 5,
        name: "Tanvir Hossain",
        fatherName: "Mohammad Hossain",
        motherName: "Rumana Hossain",
        phoneNumber: "01711223344",
        email: "tanvir@example.com",
        department: "ET",
        shift: "Day",
        semester: "2nd",
        date: "2025-02-12",
        addressPresent: "Gazipur",
        addressPermanent: "Gazipur",
        nationality: "Bangladeshi",
        dob: "2004-03-25",
        religion: "Islam",
        sscRoll: "556677",
        sscRegNo: "776655",
        board: "Dhaka",
        group: "Commerce",
        gpa: "4.70",
        schoolCollege: "Gazipur College",
        passingYear: "2020"
    },
    {
        id: 6,
        name: "Lima Ferdous",
        fatherName: "Ferdous Ali",
        motherName: "Rokia Ferdous",
        phoneNumber: "01833445566",
        email: "lima@example.com",
        department: "CST",
        shift: "Evening",
        semester: "3rd",
        date: "2025-03-15",
        addressPresent: "Dhaka",
        addressPermanent: "Dhaka",
        nationality: "Bangladeshi",
        dob: "2003-11-11",
        religion: "Islam",
        sscRoll: "667788",
        sscRegNo: "887766",
        board: "Dhaka",
        group: "Science",
        gpa: "4.90",
        schoolCollege: "Dhaka College",
        passingYear: "2019"
    },
    {
        id: 7,
        name: "Jahid Hasan",
        fatherName: "Hasan Ali",
        motherName: "Selina Hasan",
        phoneNumber: "01922334455",
        email: "jahid@example.com",
        department: "MT",
        shift: "Day",
        semester: "4th",
        date: "2025-04-10",
        addressPresent: "Chittagong",
        addressPermanent: "Comilla",
        nationality: "Bangladeshi",
        dob: "2002-06-02",
        religion: "Islam",
        sscRoll: "778899",
        sscRegNo: "998877",
        board: "Chittagong",
        group: "Commerce",
        gpa: "4.60",
        schoolCollege: "Chittagong College",
        passingYear: "2018"
    },
    {
        id: 8,
        name: "Nabila Akter",
        fatherName: "Abdur Rahman",
        motherName: "Shamima Akter",
        phoneNumber: "01799887766",
        email: "nabila@example.com",
        department: "CST",
        shift: "Evening",
        semester: "1st",
        date: "2025-01-20",
        addressPresent: "Dhaka",
        addressPermanent: "Gazipur",
        nationality: "Bangladeshi",
        dob: "2005-02-14",
        religion: "Islam",
        sscRoll: "889900",
        sscRegNo: "009988",
        board: "Dhaka",
        group: "Science",
        gpa: "5.00",
        schoolCollege: "Dhaka High School",
        passingYear: "2021"
    },
    {
        id: 9,
        name: "Riyad Islam",
        fatherName: "Abul Islam",
        motherName: "Rokeya Islam",
        phoneNumber: "01844556677",
        email: "riyad@example.com",
        department: "ET",
        shift: "Day",
        semester: "2nd",
        date: "2025-02-25",
        addressPresent: "Munshiganj",
        addressPermanent: "Munshiganj",
        nationality: "Bangladeshi",
        dob: "2004-12-12",
        religion: "Islam",
        sscRoll: "990011",
        sscRegNo: "110099",
        board: "Dhaka",
        group: "Commerce",
        gpa: "4.80",
        schoolCollege: "Munshiganj College",
        passingYear: "2020"
    },
    {
        id: 10,
        name: "Samiha Chowdhury",
        fatherName: "Chowdhury Alam",
        motherName: "Fatema Chowdhury",
        phoneNumber: "01955667788",
        email: "samiha@example.com",
        department: "MT",
        shift: "Evening",
        semester: "3rd",
        date: "2025-03-30",
        addressPresent: "Dhaka",
        addressPermanent: "Dhaka",
        nationality: "Bangladeshi",
        dob: "2003-01-05",
        religion: "Islam",
        sscRoll: "101112",
        sscRegNo: "121110",
        board: "Dhaka",
        group: "Science",
        gpa: "4.90",
        schoolCollege: "Dhaka College",
        passingYear: "2019"
    },

];


const RegisterStudent = () => {
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [deptFilter, setDeptFilter] = useState("all");
    const [semFilter, setSemFilter] = useState("all");
    const [shiftFilter, setShiftFilter] = useState("all");
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   const [studentToDelete, setStudentToDelete] = useState(null); 
    const perPage = 15;

    // Filter options
    const depts = ["all", ...new Set(students.map(s => s.department))];
    const sems = ["all", ...new Set(students.map(s => s.semester))];
    const shifts = ["all", ...new Set(students.map(s => s.shift))];

    // Filtered & searched data
    const filteredStudents = students.filter((s) => {
        const query = search.toLowerCase();
        const matchSearch =
            s.name.toLowerCase().includes(query) ||
            s.roll?.toString().includes(query) ||
            s.department.toLowerCase().includes(query) ||
            s.semester.toLowerCase().includes(query) ||
            s.shift.toLowerCase().includes(query);

        const matchDept = deptFilter === "all" || s.department === deptFilter;
        const matchSem = semFilter === "all" || s.semester === semFilter;
        const matchShift = shiftFilter === "all" || s.shift === shiftFilter;

        return matchSearch && matchDept && matchSem && matchShift;
    });

    const totalPages = Math.ceil(filteredStudents.length / perPage);
    const paginatedData = filteredStudents.slice((page - 1) * perPage, page * perPage);

    const handleFile = async (f) => {
        setFile(f);
        const formData = new FormData();
        formData.append("file", f);
        console.log("File ready to send backend", f.name);
    };

     // Delete student function
    const handleDeleteStudent = () => {
        
        const index = students.findIndex(s => s.id === studentToDelete.id);
        if (index !== -1) {
            students.splice(index, 1);
        }
        setIsDeleteModalOpen(false);
        setStudentToDelete(null);
        setPage(1); 
    };


    return (
        <div className="space-y-6">
            <h1 className="text-xl font-semibold">Students Information</h1>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row py-10 items-center justify-center gap-4">
                <FileUploadBox onFile={handleFile} />
                {file && <p className="mt-4 md:mt-0 text-sm text-gray-600">Uploaded: {file.name}</p>}
            </div>

            {/* Students List */}
            <div className="space-y-4">
                <h1 className="text-xl font-semibold">Students List</h1>

                {/* Filter + Search */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center sticky top-0 bg-white z-10 gap-4 p-4 border-b border-slate-300">
                    <div className="flex flex-wrap gap-2 md:gap-4 items-center">
                        <select
                            value={deptFilter}
                            onChange={(e) => { setDeptFilter(e.target.value); setPage(1); }}
                            className="px-3 py-2 text-sm border border-slate-400 rounded-md"
                        >
                            {depts.map(d => <option key={d} value={d}>{d === "all" ? "All Dept" : d}</option>)}
                        </select>

                        <select
                            value={semFilter}
                            onChange={(e) => { setSemFilter(e.target.value); setPage(1); }}
                            className="px-3 py-2 text-sm border border-slate-400 rounded-md"
                        >
                            {sems.map(s => <option key={s} value={s}>{s === "all" ? "All Semester" : s}</option>)}
                        </select>

                        <select
                            value={shiftFilter}
                            onChange={(e) => { setShiftFilter(e.target.value); setPage(1); }}
                            className="px-3 py-2 text-sm border border-slate-400 rounded-md"
                        >
                            {shifts.map(s => <option key={s} value={s}>{s === "all" ? "All Shift" : s}</option>)}
                        </select>
                    </div>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search student..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white border border-slate-400 rounded-lg shadow-sm overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[600px] md:min-w-full">
                        <thead className="bg-slate-200 border-b border-slate-400">
                            <tr className="text-slate-800">
                                {["Name", "Roll", "Department", "Semester", "Shift", "Date", "Action"].map(h => (
                                    <th key={h} className={`px-4 py-3 font-semibold ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-slate-400`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.map((student) => (
                                <tr key={student.id} className="border-b border-slate-300 hover:bg-slate-50">
                                    <td className="px-4 py-3 border-r border-slate-300">{student.name}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.id}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.department}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.semester}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.shift}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.date}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2 flex-wrap">
                                            <button
                                                className="h-8 w-8 flex items-center justify-center rounded-md border border-slate-400 text-slate-600 hover:bg-slate-100 cursor-pointer"
                                                onClick={() => { setSelectedStudent(student); setIsModalOpen(true); }}
                                            >
                                                <FileEdit size={16} />
                                            </button>
                                             <button
                                            className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50"
                                            onClick={() => { setStudentToDelete(student); setIsDeleteModalOpen(true); }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {paginatedData.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">No student found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex flex-wrap justify-end items-center gap-2 p-3 border-t border-slate-400">
                        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 border cursor-pointer border-slate-400 rounded disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-slate-700 text-white cursor-pointer border-slate-700" : "border-slate-400 cursor-pointer"}`}>
                                {i + 1}
                            </button>
                        ))}

                        <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 border border-slate-400 rounded disabled:opacity-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg sm:max-h-[44rem] max-h-[34rem] overflow-y-auto p-6 relative w-full max-w-3xl">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X />
                        </button>
                        <StudentDetailsForm student={selectedStudent} />
                    </div>
                </div>
            )}
            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && studentToDelete && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-sm text-center">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
                        <p className="mb-6">{studentToDelete.name} will be permanently deleted.</p>
                        <div className="flex justify-center gap-4">
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={handleDeleteStudent}
                            >
                                Delete
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                onClick={() => setIsDeleteModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsDeleteModalOpen(false)}
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default RegisterStudent;


