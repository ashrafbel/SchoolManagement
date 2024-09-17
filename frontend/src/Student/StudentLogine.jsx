import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function StudentLogine() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          email,
          password
        });
        
        console.log(response);
        if (response.data.success) {
          navigate("/dashboard");
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        setError("Une erreur s'est produite. Veuillez réessayer.");
      }
    };
    
  return (
    <div className="flex justify-center items-center h-screen p-10 ">
      <div className="grid md:grid-cols-2 grid-cols-1 border rounded-3xl">
        <div className="flex justify-center items-center p-5">
          <form onSubmit={handleLogin}>
            <h1 className="text-center mb-10 font-bold text-4xl">Login</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 text-black border outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-100 text-black border outline-none rounded-md py-3 w-full px-4 mb-3"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg"
            className="rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
