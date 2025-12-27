import { useState } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";


const studentDetails = [
    { id: 1, name: "Ariful Islam", roll: 124567, department: "Computer Science", shift: "1st", session: "21-22", phone: "01712345678" },
    { id: 2, name: "Sumaiya Akter", roll: 235678, department: "Civil", shift: "2nd", session: "22-23", phone: "01823456789" },
    { id: 3, name: "Rakib Hassan", roll: 346789, department: "Electrical", shift: "1st", session: "21-22", phone: "01934567890" },
    { id: 4, name: "Nusrat Jahan", roll: 457890, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01545678901" },
    { id: 5, name: "Tanvir Ahmed", roll: 568901, department: "Mechanical", shift: "1st", session: "21-22", phone: "01356789012" },
    { id: 6, name: "Sadiya Sultana", roll: 679012, department: "Civil", shift: "2nd", session: "22-23", phone: "01467890123" },
    { id: 7, name: "Mehedi Hasan", roll: 780123, department: "Electrical", shift: "1st", session: "21-22", phone: "01678901234" },
    { id: 8, name: "Fatima Khatun", roll: 891234, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01789012345" },
    { id: 9, name: "Kamrul Islam", roll: 902345, department: "Mechanical", shift: "1st", session: "21-22", phone: "01890123456" },
    { id: 10, name: "Liza Akter", roll: 113456, department: "Civil", shift: "2nd", session: "22-23", phone: "01901234567" },
    { id: 11, name: "Mahmudul Hasan", roll: 224567, department: "Electrical", shift: "1st", session: "21-22", phone: "01512345678" },
    { id: 12, name: "Sabina Yasmin", roll: 335678, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01323456789" },
    { id: 13, name: "Nayem Hossain", roll: 446789, department: "Mechanical", shift: "1st", session: "21-22", phone: "01434567890" },
    { id: 14, name: "Rina Begum", roll: 557890, department: "Civil", shift: "2nd", session: "22-23", phone: "01645678901" },
    { id: 15, name: "Sabbir Ahmed", roll: 668901, department: "Electrical", shift: "1st", session: "21-22", phone: "01756789012" },
    { id: 16, name: "Mim Akter", roll: 779012, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01867890123" },
    { id: 17, name: "Jasim Uddin", roll: 880123, department: "Mechanical", shift: "1st", session: "21-22", phone: "01978901234" },
    { id: 18, name: "Keya Khan", roll: 991234, department: "Civil", shift: "2nd", session: "22-23", phone: "01589012345" },
    { id: 19, name: "Hridoy Khan", roll: 102345, department: "Electrical", shift: "1st", session: "21-22", phone: "01390123456" },
    { id: 20, name: "Tania Sultana", roll: 203456, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01401234567" },
    { id: 21, name: "Faysal Ahmed", roll: 304567, department: "Mechanical", shift: "1st", session: "21-22", phone: "01612345678" },
    { id: 22, name: "Mitu Akter", roll: 405678, department: "Civil", shift: "2nd", session: "22-23", phone: "01723456789" },
    { id: 23, name: "Emon Hossain", roll: 506789, department: "Electrical", shift: "1st", session: "21-22", phone: "01834567890" },
    { id: 24, name: "Sharmin Jahan", roll: 607890, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01945678901" },
    { id: 25, name: "Rony Islam", roll: 708901, department: "Mechanical", shift: "1st", session: "21-22", phone: "01556789012" },
    { id: 26, name: "Ayesha Siddiqua", roll: 809012, department: "Civil", shift: "2nd", session: "22-23", phone: "01367890123" },
    { id: 27, name: "Sohanur Rahman", roll: 910123, department: "Electrical", shift: "1st", session: "21-22", phone: "01478901234" },
    { id: 28, name: "Farhana Islam", roll: 121234, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01689012345" },
    { id: 29, name: "Imran Khan", roll: 232345, department: "Mechanical", shift: "1st", session: "21-22", phone: "01790123456" },
    { id: 30, name: "Lima Akter", roll: 343456, department: "Civil", shift: "2nd", session: "22-23", phone: "01801234567" },
    { id: 31, name: "Shakil Ahmed", roll: 454567, department: "Electrical", shift: "1st", session: "21-22", phone: "01912345678" },
    { id: 32, name: "Priya Begum", roll: 565678, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01523456789" },
    { id: 33, name: "Yasin Ali", roll: 676789, department: "Mechanical", shift: "1st", session: "21-22", phone: "01334567890" },
    { id: 34, name: "Taslima Akter", roll: 787890, department: "Civil", shift: "2nd", session: "22-23", phone: "01445678901" },
    { id: 35, name: "Nayeem Uddin", roll: 898901, department: "Electrical", shift: "1st", session: "21-22", phone: "01656789012" },
    { id: 36, name: "Sujana Islam", roll: 909012, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01767890123" },
    { id: 37, name: "Zahid Hasan", roll: 111123, department: "Mechanical", shift: "1st", session: "21-22", phone: "01878901234" },
    { id: 38, name: "Nipa Akter", roll: 222234, department: "Civil", shift: "2nd", session: "22-23", phone: "01989012345" },
    { id: 39, name: "Saiful Islam", roll: 333345, department: "Electrical", shift: "1st", session: "21-22", phone: "01590123456" },
    { id: 40, name: "Habiba Khatun", roll: 444456, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01301234567" },
    { id: 41, name: "Raihan Ahmed", roll: 555567, department: "Mechanical", shift: "1st", session: "21-22", phone: "01412345678" },
    { id: 42, name: "Jeba Akter", roll: 666678, department: "Civil", shift: "2nd", session: "22-23", phone: "01623456789" },
    { id: 43, name: "Asif Iqbal", roll: 777789, department: "Electrical", shift: "1st", session: "21-22", phone: "01734567890" },
    { id: 44, name: "Ruma Begum", roll: 888890, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01845678901" },
    { id: 45, name: "Mustafizur", roll: 999901, department: "Mechanical", shift: "1st", session: "21-22", phone: "01956789012" },
    { id: 46, name: "Khadija", roll: 123123, department: "Civil", shift: "2nd", session: "22-23", phone: "01567890123" },
    { id: 47, name: "Alamin", roll: 234234, department: "Electrical", shift: "1st", session: "21-22", phone: "01378901234" },
    { id: 48, name: "Shanta", roll: 345345, department: "Computer Science", shift: "2nd", session: "22-23", phone: "01489012345" },
    { id: 49, name: "Morshed", roll: 456456, department: "Mechanical", shift: "1st", session: "21-22", phone: "01690123456" },
    { id: 50, name: "Bithi Akter", roll: 567567, department: "Civil", shift: "2nd", session: "22-23", phone: "01701234567" }
];


const StudentInfo = () => {
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [deptFilter, setDeptFilter] = useState("all");
    const [semFilter, setSemFilter] = useState("all");
    const [shiftFilter, setShiftFilter] = useState("all");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);
    const perPage = 15;

    // Filter options
    const depts = ["all", ...new Set(studentDetails.map(s => s.department))];
    const sems = ["all", ...new Set(studentDetails.map(s => s.semester))];
    const shifts = ["all", ...new Set(studentDetails.map(s => s.shift))];

    // Filtered & searched data
    const filteredStudents = studentDetails.filter((s) => {
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

        const index = studentDetails.findIndex(s => s.id === studentToDelete.id);
        if (index !== -1) {
            studentDetails.splice(index, 1);
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
                                {["Name", "Roll", "Department", "Shift", "Session", "Phone", "Action"].map(h => (
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
                                    <td className="px-4 py-3 border-r border-slate-300">{student.roll}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.department}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.shift}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.session}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{student.phone}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2 flex-wrap">
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


export default StudentInfo;