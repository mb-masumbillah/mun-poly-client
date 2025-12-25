import { useState } from 'react';
import { UploadCloud, Search, Edit, Trash2, X, Upload } from 'lucide-react';
import routineData from '../../assets/data/examRoutine.json';

const ExamRoutine = () => {
  const [data, setData] = useState(routineData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, title: '', publishDate: '' });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newEntry = {
        id: Date.now(),
        no: data.length + 1,
        title: file.name.split('.').slice(0, -1).join('.') || file.name,
        publishDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
      };
      setData([newEntry, ...data]);
      setShowModal(false);
      alert("Routine uploaded successfully!");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this routine?")) {
      setData(data.filter(item => item.id !== id));
    }
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setData(data.map((item) => (item.id === currentItem.id ? currentItem : item)));
    setIsEditing(false);
    alert("Updated successfully!");
  };

  return (
    <div className="p-4 lg:p-8 bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="mb-6 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-[#003049]">Exam Routine</h1>
        <p className="text-sm font-semibold text-gray-500 mt-2">Manage Your Exam Routines</p>
      </div>

      {/* Upload Box */}
      <div className="mb-10 border-2 border-dashed border-gray-200 rounded-xl p-6 lg:p-10 flex flex-col items-center justify-center bg-gray-50/30">
        <UploadCloud size={40} className="text-gray-400 mb-4" />
        <p className="text-gray-700 font-medium text-center">Drop file or browse</p>
        <button 
          onClick={() => setShowModal(true)}
          className="mt-4 bg-[#004D61] text-white px-8 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition shadow-sm"
        >
          Browse Files
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-sm mx-auto lg:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search routines..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#004D61]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Responsive Table Container */}
      <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead className="bg-[#E9F1F3]">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-gray-700">No</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700">Title</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700">Publish Date</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data
                .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">{item.no}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-semibold">{item.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-medium">{item.publishDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-6">
                        <button 
                          onClick={() => handleEditClick(item)}
                          className="text-blue-500 hover:text-blue-700 transition" 
                          title="Edit"
                        >
                          <Edit size={20} />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)} 
                          className="text-red-500 hover:text-red-700 transition" 
                          title="Delete"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal (Previous style kept) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold flex items-center gap-2"><Upload size={18}/> Upload File</span>
              <button onClick={() => setShowModal(false)}><X size={20}/></button>
            </div>
            <div className="p-10 flex flex-col items-center">
               <label className="cursor-pointer bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                  Browse File
                  <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.png,.jpg,.jpeg" />
               </label>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="font-bold text-[#003049] flex items-center gap-2">
                <Edit size={20} /> Edit Routine
              </h3>
              <button onClick={() => setIsEditing(false)}><X size={24} /></button>
            </div>
            <form onSubmit={handleSaveEdit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={currentItem.title}
                  onChange={(e) => setCurrentItem({...currentItem, title: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Publish Date</label>
                <input 
                  type="text" 
                  value={currentItem.publishDate}
                  onChange={(e) => setCurrentItem({...currentItem, publishDate: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button type="submit" className="w-full bg-[#004D61] text-white py-2 rounded-lg font-bold hover:bg-opacity-90">
                Update Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamRoutine;