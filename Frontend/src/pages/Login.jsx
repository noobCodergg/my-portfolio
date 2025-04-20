import React, { useState } from 'react';
import { login } from '../Api/adminApi';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Replace with your auth logic
    console.log('Logging in with:', formData);
    try{
      const response =await login(formData.email,formData.password)
      navigate('/users')
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Admin Login</h2>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF014F] hover:bg-[#e60045] transition-all duration-300 p-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

