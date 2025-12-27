import { Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";


const instructorDetails = [
  { id: 101, name: "Dr. Ariful Islam", department: "Computer Science", shift: "1st", email: "ariful.cse@poly.edu.bd", phone: "01712345678" },
  { id: 102, name: "Engr. Sumaiya Akter", department: "Civil", shift: "2nd", email: "sumaiya.civil@poly.edu.bd", phone: "01823456789" },
  { id: 103, name: "Engr. Rakib Hassan", department: "Electrical", shift: "1st", email: "rakib.eee@poly.edu.bd", phone: "01934567890" },
  { id: 104, name: "Dr. Nusrat Jahan", department: "Computer Science", shift: "2nd", email: "nusrat.cse@poly.edu.bd", phone: "01545678901" },
  { id: 105, name: "Engr. Tanvir Ahmed", department: "Mechanical", shift: "1st", email: "tanvir.mech@poly.edu.bd", phone: "01356789012" },
  { id: 106, name: "Sadiya Sultana", department: "Civil", shift: "2nd", email: "sadiya.civil@poly.edu.bd", phone: "01467890123" },
  { id: 107, name: "Mehedi Hasan", department: "Electrical", shift: "1st", email: "mehedi.eee@poly.edu.bd", phone: "01678901234" },
  { id: 108, name: "Fatima Khatun", department: "Computer Science", shift: "2nd", email: "fatima.cse@poly.edu.bd", phone: "01789012345" },
  { id: 109, name: "Kamrul Islam", department: "Mechanical", shift: "1st", email: "kamrul.mech@poly.edu.bd", phone: "01890123456" },
  { id: 110, name: "Liza Akter", department: "Civil", shift: "2nd", email: "liza.civil@poly.edu.bd", phone: "01901234567" },
  { id: 111, name: "Mahmudul Hasan", department: "Electrical", shift: "1st", email: "mahmud.eee@poly.edu.bd", phone: "01512345678" },
  { id: 112, name: "Sabina Yasmin", department: "Computer Science", shift: "2nd", email: "sabina.cse@poly.edu.bd", phone: "01323456789" },
  { id: 113, name: "Nayem Hossain", department: "Mechanical", shift: "1st", email: "nayem.mech@poly.edu.bd", phone: "01434567890" },
  { id: 114, name: "Rina Begum", department: "Civil", shift: "2nd", email: "rina.civil@poly.edu.bd", phone: "01645678901" },
  { id: 115, name: "Sabbir Ahmed", department: "Electrical", shift: "1st", email: "sabbir.eee@poly.edu.bd", phone: "01756789012" },
  { id: 116, name: "Mim Akter", department: "Computer Science", shift: "2nd", email: "mim.cse@poly.edu.bd", phone: "01867890123" },
  { id: 117, name: "Jasim Uddin", department: "Mechanical", shift: "1st", email: "jasim.mech@poly.edu.bd", phone: "01978901234" },
  { id: 118, name: "Keya Khan", department: "Civil", shift: "2nd", email: "keya.civil@poly.edu.bd", phone: "01589012345" },
  { id: 119, name: "Hridoy Khan", department: "Electrical", shift: "1st", email: "hridoy.eee@poly.edu.bd", phone: "01390123456" },
  { id: 120, name: "Tania Sultana", department: "Computer Science", shift: "2nd", email: "tania.cse@poly.edu.bd", phone: "01401234567" },
  { id: 121, name: "Faysal Ahmed", department: "Mechanical", shift: "1st", email: "faysal.mech@poly.edu.bd", phone: "01612345678" },
  { id: 122, name: "Mitu Akter", department: "Civil", shift: "2nd", email: "mitu.civil@poly.edu.bd", phone: "01723456789" },
  { id: 123, name: "Emon Hossain", department: "Electrical", shift: "1st", email: "emon.eee@poly.edu.bd", phone: "01834567890" },
  { id: 124, name: "Sharmin Jahan", department: "Computer Science", shift: "2nd", email: "sharmin.cse@poly.edu.bd", phone: "01945678901" },
  { id: 125, name: "Rony Islam", department: "Mechanical", shift: "1st", email: "rony.mech@poly.edu.bd", phone: "01556789012" },
  { id: 126, name: "Ayesha Siddiqua", department: "Civil", shift: "2nd", email: "ayesha.civil@poly.edu.bd", phone: "01367890123" },
  { id: 127, name: "Sohanur Rahman", department: "Electrical", shift: "1st", email: "sohan.eee@poly.edu.bd", phone: "01478901234" },
  { id: 128, name: "Farhana Islam", department: "Computer Science", shift: "2nd", email: "farhana.cse@poly.edu.bd", phone: "01689012345" },
  { id: 129, name: "Imran Khan", department: "Mechanical", shift: "1st", email: "imran.mech@poly.edu.bd", phone: "01790123456" },
  { id: 130, name: "Lima Akter", department: "Civil", shift: "2nd", email: "lima.civil@poly.edu.bd", phone: "01801234567" },
  { id: 131, name: "Shakil Ahmed", department: "Electrical", shift: "1st", email: "shakil.eee@poly.edu.bd", phone: "01912345678" },
  { id: 132, name: "Priya Begum", department: "Computer Science", shift: "2nd", email: "priya.cse@poly.edu.bd", phone: "01523456789" },
  { id: 133, name: "Yasin Ali", department: "Mechanical", shift: "1st", email: "yasin.mech@poly.edu.bd", phone: "01334567890" },
  { id: 134, name: "Taslima Akter", department: "Civil", shift: "2nd", email: "taslima.civil@poly.edu.bd", phone: "01445678901" },
  { id: 135, name: "Nayeem Uddin", department: "Electrical", shift: "1st", email: "nayeem.eee@poly.edu.bd", phone: "01656789012" },
  { id: 136, name: "Sujana Islam", department: "Computer Science", shift: "2nd", email: "sujana.cse@poly.edu.bd", phone: "01767890123" },
  { id: 137, name: "Zahid Hasan", department: "Mechanical", shift: "1st", email: "zahid.mech@poly.edu.bd", phone: "01878901234" },
  { id: 138, name: "Nipa Akter", department: "Civil", shift: "2nd", email: "nipa.civil@poly.edu.bd", phone: "01989012345" },
  { id: 139, name: "Saiful Islam", department: "Electrical", shift: "1st", email: "saiful.eee@poly.edu.bd", phone: "01590123456" },
  { id: 140, name: "Habiba Khatun", department: "Computer Science", shift: "2nd", email: "habiba.cse@poly.edu.bd", phone: "01301234567" },
  { id: 141, name: "Raihan Ahmed", department: "Mechanical", shift: "1st", email: "raihan.mech@poly.edu.bd", phone: "01412345678" },
  { id: 142, name: "Jeba Akter", department: "Civil", shift: "2nd", email: "jeba.civil@poly.edu.bd", phone: "01623456789" },
  { id: 143, name: "Asif Iqbal", department: "Electrical", shift: "1st", email: "asif.eee@poly.edu.bd", phone: "01734567890" },
  { id: 144, name: "Ruma Begum", department: "Computer Science", shift: "2nd", email: "ruma.cse@poly.edu.bd", phone: "01845678901" },
  { id: 145, name: "Mustafizur Rahman", department: "Mechanical", shift: "1st", email: "mustafiz.mech@poly.edu.bd", phone: "01956789012" },
  { id: 146, name: "Khadija Islam", department: "Civil", shift: "2nd", email: "khadija.civil@poly.edu.bd", phone: "01567890123" },
  { id: 147, name: "Alamin Hossain", department: "Electrical", shift: "1st", email: "alamin.eee@poly.edu.bd", phone: "01378901234" },
  { id: 148, name: "Shanta Paul", department: "Computer Science", shift: "2nd", email: "shanta.cse@poly.edu.bd", phone: "01489012345" },
  { id: 149, name: "Morshed Khan", department: "Mechanical", shift: "1st", email: "morshed.mech@poly.edu.bd", phone: "01690123456" },
  { id: 150, name: "Bithi Akter", department: "Civil", shift: "2nd", email: "bithi.civil@poly.edu.bd", phone: "01701234567" }
];



const InstructorInfo = () => {
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [deptFilter, setDeptFilter] = useState("all");
    const [shiftFilter, setShiftFilter] = useState("all");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [instructorToDelete, setInstructorToDelete] = useState(null);
    const perPage = 15;

    // Filter options
    const depts = ["all", ...new Set(instructorDetails.map(s => s.department))];
    const shifts = ["all", ...new Set(instructorDetails.map(s => s.shift))];

    // Filtered & searched data
    const filteredInstructors = instructorDetails.filter((s) => {
        const query = search.toLowerCase();
        const matchSearch =
            s.name.toLowerCase().includes(query) ||
            s.roll?.toString().includes(query) ||
            s.department.toLowerCase().includes(query) ||
            s.semester.toLowerCase().includes(query) ||
            s.shift.toLowerCase().includes(query);

        const matchDept = deptFilter === "all" || s.department === deptFilter;
        const matchShift = shiftFilter === "all" || s.shift === shiftFilter;

        return matchSearch && matchDept && matchShift;
    });

    const totalPages = Math.ceil(filteredInstructors.length / perPage);
    const paginatedData = filteredInstructors.slice((page - 1) * perPage, page * perPage);

    const handleFile = async (f) => {
        setFile(f);
        const formData = new FormData();
        formData.append("file", f);
        console.log("File ready to send backend", f.name);
    };

    // Delete instructor function
    const handleDeleteInstructor = () => {

        const index = instructorDetails.findIndex(s => s.id === instructorToDelete.id);
        if (index !== -1) {
            instructorDetails.splice(index, 1);
        }
        setIsDeleteModalOpen(false);
        setInstructorToDelete(null);
        setPage(1);
    };


    return (
        <div className="space-y-6">
            <h1 className="text-xl font-semibold">Instructor Information</h1>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row py-10 items-center justify-center gap-4">
                <FileUploadBox onFile={handleFile} />
                {file && <p className="mt-4 md:mt-0 text-sm text-gray-600">Uploaded: {file.name}</p>}
            </div>

            {/* instructors List */}
            <div className="space-y-4">
                <h1 className="text-xl font-semibold">Instructor's List</h1>

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
                            placeholder="Search instructor..."
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
                                {["Name", "Department", "Shift", "Email", "Phone", "Action"].map(h => (
                                    <th key={h} className={`px-4 py-3 font-semibold ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-slate-400`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.map((instructor) => (
                                <tr key={instructor.id} className="border-b border-slate-300 hover:bg-slate-50">
                                    <td className="px-4 py-3 border-r border-slate-300">{instructor.name}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{instructor.department}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{instructor.shift}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{instructor.email}</td>
                                    <td className="px-4 py-3 border-r border-slate-300">{instructor.phone}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2 flex-wrap">
                                            <button
                                                className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50"
                                                onClick={() => { setInstructorToDelete(instructor); setIsDeleteModalOpen(true); }}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {paginatedData.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">No instructor found</td>
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

            {isDeleteModalOpen && instructorToDelete && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-sm text-center">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
                        <p className="mb-6">{instructorToDelete.name} will be permanently deleted.</p>
                        <div className="flex justify-center gap-4">
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                onClick={handleDeleteInstructor}
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


export default InstructorInfo;