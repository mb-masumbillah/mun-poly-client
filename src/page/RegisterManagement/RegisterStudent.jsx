import { useState } from "react";
import { FileEdit, Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";
import StudentDetailsForm from "../../components/ui/RegisterSystem/StudentDetailsForm";

const students = [
    { name: "Cheyenne Donin", roll: "651301", dept: "Computer Science and Technology", sem: "1st", shift: "Day", date: "19 May 25" },
    { name: "Anika Schleifer", roll: "651302", dept: "Electrical Technology", sem: "2nd", shift: "Morning", date: "19 May 25" },
    { name: "Tiana Donin", roll: "651303", dept: "Civil Technology", sem: "3rd", shift: "Day", date: "19 May 25" },
    { name: "Giana Workman", roll: "651304", dept: "IPCT", sem: "4th", shift: "Morning", date: "19 May 25" },
    { name: "Charlie Septimus", roll: "651305", dept: "Mechanical Technology", sem: "1st", shift: "Day", date: "19 May 25" },
    { name: "Ashlynn Aminoff", roll: "651306", dept: "Computer Science and Technology", sem: "2nd", shift: "Morning", date: "19 May 25" },
    { name: "Cristofer Culhane", roll: "651307", dept: "Electrical Technology", sem: "3rd", shift: "Morning", date: "19 May 25" },
    { name: "Alfredo Calzoni", roll: "651308", dept: "Civil Technology", sem: "4th", shift: "Day", date: "19 May 25" },
    { name: "Jordyn Curtis", roll: "651309", dept: "IPCT", sem: "2nd", shift: "Morning", date: "19 May 25" },
    { name: "Corey Bator", roll: "651310", dept: "Mechanical Technology", sem: "3rd", shift: "Day", date: "19 May 25" },
    { name: "Lydia Newton", roll: "651311", dept: "Computer Science and Technology", sem: "1st", shift: "Day", date: "19 May 25" },
    { name: "Ethan Marlow", roll: "651312", dept: "Electrical Technology", sem: "2nd", shift: "Morning", date: "19 May 25" },
    { name: "Sophia Klein", roll: "651313", dept: "Civil Technology", sem: "4th", shift: "Day", date: "19 May 25" },
    { name: "Maxwell Porter", roll: "651314", dept: "IPCT", sem: "3rd", shift: "Morning", date: "19 May 25" },
    { name: "Isla Whitman", roll: "651315", dept: "Mechanical Technology", sem: "2nd", shift: "Day", date: "19 May 25" },
    { name: "Leo Hamilton", roll: "651316", dept: "Computer Science and Technology", sem: "1st", shift: "Morning", date: "19 May 25" },
    { name: "Olivia York", roll: "651317", dept: "Electrical Technology", sem: "4th", shift: "Day", date: "19 May 25" },
    { name: "Mason Drake", roll: "651318", dept: "Civil Technology", sem: "3rd", shift: "Morning", date: "19 May 25" },
    { name: "Ava Lennox", roll: "651319", dept: "IPCT", sem: "2nd", shift: "Day", date: "19 May 25" },
    { name: "Noah Ramsey", roll: "651320", dept: "Mechanical Technology", sem: "1st", shift: "Morning", date: "19 May 25" },
    { name: "Emma Caldwell", roll: "651321", dept: "Computer Science and Technology", sem: "4th", shift: "Day", date: "19 May 25" },
    { name: "Lucas Benton", roll: "651322", dept: "Electrical Technology", sem: "3rd", shift: "Morning", date: "19 May 25" },
    { name: "Mia Ford", roll: "651323", dept: "Civil Technology", sem: "2nd", shift: "Day", date: "19 May 25" },
    { name: "Henry Maxwell", roll: "651324", dept: "IPCT", sem: "1st", shift: "Morning", date: "19 May 25" },
    { name: "Charlotte Bishop", roll: "651325", dept: "Mechanical Technology", sem: "4th", shift: "Day", date: "19 May 25" }
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
    const perPage = 15;

    const depts = ["all", ...new Set(students.map(s => s.dept))];
    const sems = ["all", ...new Set(students.map(s => s.sem))];
    const shifts = ["all", ...new Set(students.map(s => s.shift))];

    const filteredStudents = students.filter((s) => {
        const query = search.toLowerCase();
        const matchSearch =
            s.name.toLowerCase().includes(query) ||
            s.roll.toString().toLowerCase().includes(query) ||
            s.dept.toLowerCase().includes(query) ||
            s.sem.toLowerCase().includes(query) ||
            s.shift.toLowerCase().includes(query);

        const matchDept = deptFilter === "all" || s.dept === deptFilter;
        const matchSem = semFilter === "all" || s.sem === semFilter;
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

                {/* Filter + Search Sticky */}
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
                            {paginatedData.map((student, i) => (
                                <tr key={i} className="border-b border-slate-300 hover:bg-slate-50">
                                    <td className="px-4 py-3 border-r border-slate-300">{student.name}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.roll}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.dept}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.sem}</td>
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
                                            <button className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50">
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
                    <div className="bg-white rounded-lg shadow-lg max-h-[44rem] overflow-y-auto p-6 relative w-full max-w-lg">
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
        </div>
    );
};

export default RegisterStudent;

