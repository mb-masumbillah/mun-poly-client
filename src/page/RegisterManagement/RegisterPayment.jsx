import { useState } from "react";
import { Trash2, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import FileUploadBox from "../../components/ui/RegisterSystem/FileUploadBox";

const paymentData = [
    { _id: "651301", paymentID: "651301", userID: "651301", amount: "1500TK", paymentMethod: "Rocket", txnID: "5685001", date: "10:00 am" },
    { _id: "651302", paymentID: "651302", userID: "651302", amount: "2000TK", paymentMethod: "Rocket", txnID: "5685002", date: "10:30 am" },
    { _id: "651303", paymentID: "651303", userID: "651303", amount: "2500TK", paymentMethod: "Rocket", txnID: "5685003", date: "11:00 am" },
    { _id: "651304", paymentID: "651304", userID: "651304", amount: "3000TK", paymentMethod: "Rocket", txnID: "5685004", date: "11:30 am" },
    { _id: "651305", paymentID: "651305", userID: "651305", amount: "1200TK", paymentMethod: "Rocket", txnID: "5685005", date: "12:00 pm" },
    { _id: "651306", paymentID: "651306", userID: "651306", amount: "1800TK", paymentMethod: "Rocket", txnID: "5685006", date: "12:30 pm" },
    { _id: "651307", paymentID: "651307", userID: "651307", amount: "2200TK", paymentMethod: "Rocket", txnID: "5685007", date: "01:00 pm" },
    { _id: "651308", paymentID: "651308", userID: "651308", amount: "1600TK", paymentMethod: "Rocket", txnID: "5685008", date: "01:30 pm" },
    { _id: "651309", paymentID: "651309", userID: "651309", amount: "2500TK", paymentMethod: "Rocket", txnID: "5685009", date: "02:00 pm" },
    { _id: "651310", paymentID: "651310", userID: "651310", amount: "2700TK", paymentMethod: "Rocket", txnID: "5685010", date: "02:30 pm" },
    { _id: "651311", paymentID: "651311", userID: "651311", amount: "1900TK", paymentMethod: "Rocket", txnID: "5685011", date: "03:00 pm" },
    { _id: "651312", paymentID: "651312", userID: "651312", amount: "2300TK", paymentMethod: "Rocket", txnID: "5685012", date: "03:30 pm" },
    { _id: "651313", paymentID: "651313", userID: "651313", amount: "2100TK", paymentMethod: "Rocket", txnID: "5685013", date: "04:00 pm" },
    { _id: "651314", paymentID: "651314", userID: "651314", amount: "2000TK", paymentMethod: "Rocket", txnID: "5685014", date: "04:30 pm" },
    { _id: "651315", paymentID: "651315", userID: "651315", amount: "2400TK", paymentMethod: "Rocket", txnID: "5685015", date: "05:00 pm" },
    { _id: "651316", paymentID: "651316", userID: "651316", amount: "2600TK", paymentMethod: "Rocket", txnID: "5685016", date: "05:30 pm" },
    { _id: "651317", paymentID: "651317", userID: "651317", amount: "1800TK", paymentMethod: "Rocket", txnID: "5685017", date: "06:00 pm" },
    { _id: "651318", paymentID: "651318", userID: "651318", amount: "2200TK", paymentMethod: "Rocket", txnID: "5685018", date: "06:30 pm" },
    { _id: "651319", paymentID: "651319", userID: "651319", amount: "2500TK", paymentMethod: "Rocket", txnID: "5685019", date: "07:00 pm" },
    { _id: "651320", paymentID: "651320", userID: "651320", amount: "2000TK", paymentMethod: "Rocket", txnID: "5685020", date: "07:30 pm" },
    { _id: "651321", paymentID: "651321", userID: "651321", amount: "2300TK", paymentMethod: "Rocket", txnID: "5685021", date: "08:00 pm" },
    { _id: "651322", paymentID: "651322", userID: "651322", amount: "2700TK", paymentMethod: "Rocket", txnID: "5685022", date: "08:30 pm" },
    { _id: "651323", paymentID: "651323", userID: "651323", amount: "2900TK", paymentMethod: "Rocket", txnID: "5685023", date: "09:00 pm" }
];

const RegisterPayment = () => {
    const [file, setFile] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    // const [paymentToDelete, setPaymentToDelete] = useState(null);
    const perPage = 10;

    const filteredPayment = paymentData.filter((p) =>
        p.userID.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPayment.length / perPage);
    const paginatedData = filteredPayment.slice((page - 1) * perPage, page * perPage);

    const handleFile = async (f) => {
        setFile(f);
        const formData = new FormData();
        formData.append("file", f);
        // console.log("File ready to send backend", f.name);
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
            <h1 className="text-2xl font-bold text-gray-800">Payment Information</h1>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-sm">
                <FileUploadBox onFile={handleFile} />
                {file && <p className="text-gray-600 mt-2 md:mt-0">Uploaded: <span className="font-medium">{file.name}</span></p>}
            </div>

            {/* Payment Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Header with Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b border-gray-300 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-semibold text-gray-700">Payments List</h2>
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
                                {["Payment ID", "User ID", "Amount", "Payment Method", "TxnID", "Date", "Action"].map((h) => (
                                    <th key={h} className={`px-4 py-3 font-medium ${h === "Action" ? "text-center" : "text-left"} border-r last:border-r-0 border-gray-300`}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((payment) => (
                                    <tr key={payment._id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.paymentID}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.userID}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.amount}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.paymentMethod}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.txnID}</td>
                                        <td className="px-4 py-3 border-r border-gray-200">{payment.date}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-center">
                                                <button
                                                    className="h-8 w-8 flex items-center justify-center rounded-md border border-red-400 text-red-600 hover:bg-red-50"
                                                    onClick={() => {  setIsDeleteModalOpen(true); }}
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-gray-500">No payment found</td>
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
                        <p className="mb-6">Payment will be permanently deleted.</p>
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

export default RegisterPayment;
