import { useState } from "react";
import { FileEdit, Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import * as XLSX from "xlsx";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";
import StudentDetailsForm from "../../components/ui/RegisterSystem/StudentDetailsForm";

const RegisterStudent = () => {
  const [students, setStudents] = useState([]);
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

const handleFile = async (file) => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });

  const formatted = jsonData.map(row => {
    const obj = {};
    Object.keys(row).forEach(key => {
      obj[key.toLowerCase()] = row[key];
    });
    return obj;
  });
  setStudents(formatted);
};

  const filteredStudents = students.filter((s) => {
    const q = search.toLowerCase();
    const matchSearch = s.name?.toLowerCase().includes(q) || s.roll?.toString().includes(q);
    const matchDept = deptFilter === "all" || s.department === deptFilter;
    const matchSem = semFilter === "all" || s.semester === semFilter;
    const matchShift = shiftFilter === "all" || s.shift === shiftFilter;
    return matchSearch && matchDept && matchSem && matchShift;
  });

  const totalPages = Math.ceil(filteredStudents.length / perPage);
  const paginatedData = filteredStudents.slice((page - 1) * perPage, page * perPage);

  const handleDeleteStudent = () => {
    setStudents(students.filter(s => s !== studentToDelete));
    setIsDeleteModalOpen(false);
    setStudentToDelete(null);
    setPage(1);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Students Information</h1>

      <div className="flex flex-col md:flex-row py-10 items-center justify-center gap-4">
        <FileUploadBox onFile={handleFile} />
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Students List</h1>

        <div className="flex flex-col md:flex-row md:justify-between items-center sticky top-0 bg-white z-10 gap-4 p-4 border-b border-slate-300">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <select value={deptFilter} onChange={(e) => { setDeptFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
              <option value="all">All Dept</option>
              {[...new Set(students.map(s => s.department))].map(d => <option key={d} value={d}>{d}</option>)}
            </select>

            <select value={semFilter} onChange={(e) => { setSemFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
              <option value="all">All Semester</option>
              {[...new Set(students.map(s => s.semester))].map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <select value={shiftFilter} onChange={(e) => { setShiftFilter(e.target.value); setPage(1); }} className="px-3 py-2 text-sm border border-slate-400 rounded-md">
              <option value="all">All Shift</option>
              {[...new Set(students.map(s => s.shift))].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input type="text" placeholder="Search student..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-400 rounded-md focus:ring-2 focus:ring-slate-300" />
          </div>
        </div>

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
              {paginatedData.map((s, i) => (
                <tr key={i} className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3 border-r">{s.name}</td>
                  <td className="px-4 py-3 border-r">{s.roll}</td>
                  <td className="px-4 py-3 border-r">{s.department}</td>
                  <td className="px-4 py-3 border-r">{s.semester}</td>
                  <td className="px-4 py-3 border-r">{s.shift}</td>
                  <td className="px-4 py-3 border-r">{s.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <button className="h-8 w-8 flex items-center justify-center rounded-md border border-slate-400 hover:bg-slate-100"
                        onClick={() => { setSelectedStudent(s); setIsModalOpen(true); }}>
                        <FileEdit size={16} />
                      </button>

                      <button className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 hover:bg-red-50"
                        onClick={() => { setStudentToDelete(s); setIsDeleteModalOpen(true); }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedData.length === 0 && <tr><td colSpan={7} className="text-center py-4 text-gray-500">No student found</td></tr>}
            </tbody>
          </table>

          <div className="flex justify-end items-center gap-2 p-3 border-t">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-2 border border-slate-400 rounded disabled:opacity-50"><ChevronLeft size={16} /></button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-slate-700 text-white border-slate-700" : "border-slate-400"}`}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-2 border border-slate-400 rounded disabled:opacity-50"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-h-[34rem] overflow-y-auto p-6 relative w-full max-w-3xl">
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setIsModalOpen(false)}><X /></button>
            <StudentDetailsForm student={selectedStudent} />
          </div>
        </div>
      )}

      {isDeleteModalOpen && studentToDelete && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
            <p className="mb-6">{studentToDelete.name} will be permanently deleted.</p>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" onClick={handleDeleteStudent}>Delete</button>
              <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
            </div>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setIsDeleteModalOpen(false)}><X /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterStudent;
