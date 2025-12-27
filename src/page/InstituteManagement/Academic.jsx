import { useState } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";



const academicData = [
  {
    id: 1,
    name: "Computer Science and Technology",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Electronics Technology",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Electrical Technology",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Civil Technology",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Mechanical Technology",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Power Technology",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Refrigeration and Air Conditioning",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=400&auto=format&fit=crop"
  }
]


const Academic = () => {
  const [file, setFile] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [deptFilter, setDeptFilter] = useState("all");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [academyToDelete, setacademyToDelete] = useState(null);
  const perPage = 15;

  // Filter options
  const name = ["all", ...new Set(academicData.map(s => s.name))];


  // Filtered & searched data
  const filteredacademys = academicData.filter((s) => {
    const query = search.toLowerCase();
    const matchSearch =
      s.name.toLowerCase().includes(query);

    const matchDept = deptFilter === "all" || s.name === deptFilter;


    return matchSearch && matchDept;
  });

  const totalPages = Math.ceil(filteredacademys.length / perPage);
  const paginatedData = filteredacademys.slice((page - 1) * perPage, page * perPage);

  const handleFile = async (f) => {
    setFile(f);
    const formData = new FormData();
    formData.append("file", f);
    // console.log("File ready to send backend", f.name);
  };

  // Delete academy function
  const handleDeleteacademy = () => {

    const index = academicData.findIndex(s => s.id === academyToDelete.id);
    if (index !== -1) {
      academicData.splice(index, 1);
    }
    setIsDeleteModalOpen(false);
    setacademyToDelete(null);
    setPage(1);
  };


  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Academy Information</h1>

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row py-10 items-center justify-center gap-4">
        <FileUploadBox onFile={handleFile} />
        {file && <p className="mt-4 md:mt-0 text-sm text-gray-600">Uploaded: {file.name}</p>}
      </div>

      {/* Academy List */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Academy List</h1>

        {/* Filter + Search */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center sticky top-0 bg-white z-10 gap-4 p-4 border-b border-slate-300">
          <div className="flex flex-wrap gap-2 md:gap-4 items-center">
            <select
              value={deptFilter}
              onChange={(e) => { setDeptFilter(e.target.value); setPage(1); }}
              className="px-3 py-2 text-sm border border-slate-400 rounded-md"
            >
              {name.map(d => <option key={d} value={d}>{d === "all" ? "All Dept" : d}</option>)}
            </select>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search academy..."
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
                {["Name", "Image", "Action"].map(h => (
                  <th key={h} className={`px-4 py-3 font-semibold ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-slate-400`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((academy) => (
                <tr key={academy.id} className="border-b border-slate-300 hover:bg-slate-50">
                  <td className="px-4 py-3 border-r border-slate-300">{academy.name}</td>
                  <td className="px-4 py-3 border-r border-slate-300 w-48 h-48">
                    <img src={academy.image} alt="" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <button
                        className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50"
                        onClick={() => { setacademyToDelete(academy); setIsDeleteModalOpen(true); }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-gray-500">No academy found</td>
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

      {isDeleteModalOpen && academyToDelete && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
            <p className="mb-6">{academyToDelete.name} will be permanently deleted.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleDeleteacademy}
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

export default Academic;