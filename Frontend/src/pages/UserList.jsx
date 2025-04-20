import React, { useState, useEffect } from 'react'
import { FaTrophy } from 'react-icons/fa'
import { getUsers } from '../Api/userApi'

const UserList = () => {
  const [data, setData] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Result</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.result}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-2 px-4 text-center">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserList

