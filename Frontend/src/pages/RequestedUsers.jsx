import React, { useEffect, useState } from 'react';
import { getJoinedUserData } from '../Api/userApi';
import { updateStatus } from '../Api/requestApi';
const RequestedUsers = () => {
  const [users, setUsers] = useState([]);
  const [refresh,setRefrsh]=useState(false)
  const fetchData = async () => {
    try {
      const response = await getJoinedUserData();
      console.log(response.data)
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);


  const handleStatus=async(requestId)=>{
    try{
        
        const response=await updateStatus(requestId)
        setRefrsh(!refresh)
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Requested Users</h2>
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Result</th>
              <th className="px-4 py-2 border">Budget</th>
              <th className="px-4 py-2 border">Details</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 border">{idx + 1}</td>
                <td className="px-4 py-2 border">{user.first_name} {user.last_name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
                <td className="px-4 py-2 border">{user.result}</td>
                <td className="px-4 py-2 border">{user.budget}</td>
                <td className="px-4 py-2 border">{user.details}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                  onClick={()=>handleStatus(user._id)}
                    disabled={user.status === true}
                    className={`px-3 py-1 rounded text-white ${
                      user.status ? 'bg-green-600 cursor-not-allowed' : 'bg-red-500'
                    }`}
                  >
                    {user.status ? 'Done' : 'Not Done'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedUsers;
