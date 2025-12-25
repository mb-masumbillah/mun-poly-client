import { useState } from 'react';
import { UploadCloud, Search, Edit, Trash2, X, Upload, Check } from 'lucide-react';
import assignData from '../../assets/data/assign.json';

const Assign = () => {
  const [data, setData] = useState(assignData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);


  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, title: '', publishDate: '' });

  // file upload holder
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
      alert("Assignment file uploaded successfully!");
    }
  };

  // delete handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      setData(data.filter(item => item.id !== id));
    }
  };

  // edit button clcick handler
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  // edit save handler
  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) => 
      item.id === currentItem.id ? currentItem : item
    );
    setData(updatedData);
    setIsEditing(false);
    alert("Updated successfully!");
  };

  return (
    <div className="p-4 lg:p-8 bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#003049]">Assign</h1>
        <p className="text-sm font-semibold text-gray-500 mt-2 tracking-wide">Manage Your Assigned Instructor and Staff</p>
      </div>

      {/* Upload Box (Figma Style) */}
      <div className="mb-10 border-2 border-dashed border-gray-200 rounded-xl p-6 lg:p-10 flex flex-col items-center justify-center bg-gray-50/30">
        <UploadCloud size={48} className="text-gray-400 mb-4" />
        <p className="text-gray-700 font-medium mb-1">Drop file or browse</p>
        <p className="text-xs text-gray-400 mb-6 text-center">Format: .jpeg, .png, .PDF & Max file size: 25 MB</p>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#004D61] text-white px-8 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition shadow-sm"
        >
          Browse Files
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-sm mx-auto lg:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search assignments..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#004D61]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* --- Responsive Data Table --- */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        {/* টেবিলকে স্ক্রলযোগ্য করার জন্য overflow-x-auto এবং min-width ব্যবহার করা হয়েছে */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-[#E9F1F3]">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">No</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">Title</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700">Publish date</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{item.no}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">{item.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.publishDate}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex justify-center gap-6">
                      <button 
                        onClick={() => handleEditClick(item)}
                        className="text-gray-400 hover:text-blue-600 transition" 
                        title="Edit"
                      >
                        <Edit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)} 
                        className="text-red-400 hover:text-red-600 transition" 
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

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-2 font-bold text-gray-800">
                <Upload size={18} className="text-blue-600" />
                <span>Insert Assignment File</span>
              </div>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            
            <div className="p-16 flex flex-col items-center justify-center">
               <label className="cursor-pointer bg-blue-600 text-white px-10 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-blue-700 transition">
                  Browse File
                  <input type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.png,.jpg,.jpeg" />
               </label>
               <p className="mt-4 text-sm text-gray-400">or drag a file here</p>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-5 border-b bg-gray-50">
              <h3 className="font-bold text-[#003049] flex items-center gap-2 text-lg">
                <Edit size={20} /> Edit Assignment
              </h3>
              <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSaveEdit} className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Notice Title</label>
                <input 
                  type="text" 
                  value={currentItem.title}
                  onChange={(e) => setCurrentItem({...currentItem, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#004D61] transition"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Publish Date</label>
                <input 
                  type="text" 
                  value={currentItem.publishDate}
                  onChange={(e) => setCurrentItem({...currentItem, publishDate: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#004D61] transition"
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#004D61] text-white rounded-lg font-semibold hover:bg-opacity-90 flex items-center justify-center gap-2 transition"
                >
                  <Check size={18} /> Save Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assign;