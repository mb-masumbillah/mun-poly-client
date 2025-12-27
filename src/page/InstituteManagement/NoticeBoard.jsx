import { useState } from "react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";
import { Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";

const noticeData = [
    {
        id: 1,
        title: "Diploma in engineering 2022",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 2,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 3,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 4,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 5,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 6,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 7,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 8,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 9,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 10,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 11,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 12,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 13,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 14,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 15,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 16,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 17,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 18,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 19,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    },
    {
        id: 20,
        title: "Diploma in engineering",
        publishDate: "25-12-12",
        pdf: "https://diploma.pdf"
    }
]


const NoticeBoard = () => {
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // const [noticeToDelete, setnoticeToDelete] = useState(null);
    const perPage = 10;

    const filteredNotice = noticeData.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredNotice.length / perPage);
    const paginatedData = filteredNotice.slice((page - 1) * perPage, page * perPage);

    const handleFile = async (f) => {
        setFile(f);
        const formData = new FormData();
        formData.append("file", f);
        console.log("File ready to send backend", f.name);
    };

    const handleDeleteStudent = () => {

        // const index = students.findIndex(s => s.id === studentToDelete.id);
        // if (index !== -1) {
        //     students.splice(index, 1);
        // }
        setIsDeleteModalOpen(false);
        // setStudentToDelete(null);
        setPage(1);
    };


    return (
        <div className="space-y-10">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">Notice Information</h1>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-sm">
                <FileUploadBox onFile={handleFile} />
                {file && <p className="text-gray-600 mt-2 md:mt-0">Uploaded: <span className="font-medium">{file.name}</span></p>}
            </div>

            {/* notice Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Header with Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b border-gray-300 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-semibold text-gray-700">Notices List</h2>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search student..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-gray-100 border-b border-gray-300">
                            <tr className="text-gray-700">
                                {["Title", "Publish Date", "PDF", "Action"].map((h) => (
                                    <th key={h} className={`px-4 py-3 font-medium ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-gray-300`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((notice) => (
                                    <tr key={notice.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-3 border-r border-gray-200">{notice.title}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{notice.publishDate}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{notice.pdf}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-center">
                                                <button
                                                    className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50"
                                                    onClick={() => { setIsDeleteModalOpen(true) }}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">No notice found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap justify-end gap-2 p-3 border-t border-gray-300">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="p-2 border border-gray-300 rounded disabled:opacity-50"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 text-gray-700"}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="p-2 border border-gray-300 rounded disabled:opacity-50"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-sm text-center">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete?</h2>
                        <p className="mb-6">notice will be permanently deleted.</p>
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

export default NoticeBoard;