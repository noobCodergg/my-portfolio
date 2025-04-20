import React, { useEffect, useState } from 'react';
import { getPrize, postPrize,updateStatus } from '../Api/prizeApi';

const ManagePrize = () => {
  const [showModal, setShowModal] = useState(false);
  const [prizes, setPrizes] = useState([]);
  const [name, setName] = useState('');
  const [Refresh,setRefresh]=useState(false)

  const fetchPrize = async () => {
    try {
      const response = await getPrize();
      // Default isActive to true if not present
      const formatted = response.data.map(p => ({
        ...p,
        isActive: p.isActive ?? true,
      }));
      setPrizes(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrize();
  }, [Refresh]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postPrize(name);
      console.log(response.data);
      fetchPrize(); // Refresh the list
    } catch (error) {
      console.log(error);
    }

    setName('');
    setShowModal(false);
    setRefresh(!Refresh)
  };

  const toggleStatus =async (id,status) => {
    try{
        const response=await updateStatus(id,status)
        console.log(response)
        setRefresh(!Refresh)
    }catch(error){
        console.log(error)
    }
  };

  return (
    <div className="p-4">
      {/* Add Prize Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setShowModal(true)}
      >
        + Add Prize
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-xl font-bold mb-4">Add New Prize</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Prize Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Prize Table */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Prize List</h3>
        {prizes.length === 0 ? (
          <p className="text-gray-500">No prizes added yet.</p>
        ) : (
          <table className="w-full border text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {prizes.map((prize, index) => (
                <tr key={index}>
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{prize.name}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => toggleStatus(prize._id,prize.status)}
                      className={`px-3 py-1 rounded text-white ${
                        prize.status ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {prize.status ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManagePrize;
