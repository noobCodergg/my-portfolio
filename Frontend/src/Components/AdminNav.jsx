import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaInbox, FaTrophy, FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../Api/adminApi';


const AdminNav = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try{
      const response=await logout();
      navigate('/login')
    }catch(error){
      console.log(error)
    }
  };

  const navItems = [
    { name: 'Create Project', to: '/upload', icon: <FaPlus /> },
    { name: 'Requests', to: '/users', icon: <FaInbox /> },
    { name: 'Prizes', to: '/manageprize', icon: <FaTrophy /> },
    {name: 'User List', to:'/userlist', icon:<FaInbox/>}
  ];

  return (
    <nav className="bg-[#141414] text-white w-full py-4 px-6 shadow-md border-b border-gray-800 flex justify-between items-center">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="flex items-center gap-2 text-sm font-medium hover:text-[#FF014F] transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={logoutHandler}
        className="flex items-center gap-2 text-sm font-medium text-white hover:text-red-500 transition"
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default AdminNav;
