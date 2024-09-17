import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', formData);
      
      if (response.data.success) {
        setSuccess('User registered successfully!');
        
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: 'url(https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg)',  // أضف رابط الصورة هنا
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

      <div className="relative bg-[#0C172C] p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-3xl font-bold text-yellow-400 text-center">Create an account</h3>

          <div>
            <label className="text-white text-sm block mb-2">Full Name</label>
            <div className="relative flex items-center">
              <input
                name="name"
                type="text"
                required
                className="w-full bg-transparent text-base text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-4 outline-none"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Email</label>
            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent text-base text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-4 outline-none"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-white text-sm block mb-2">Password</label>
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="w-full bg-transparent text-base text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-4 outline-none"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && <p className="text-red-500 mt-3">{error}</p>}

          {success && <p className="text-green-500 mt-3">{success}</p>}

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 text-lg text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
            >
              Register
            </button>
            <p className="text-sm text-white text-center mt-8">
              Already have an account?
              <Link to="/login" className="text-yellow-400 font-semibold hover:underline ml-1">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}