import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault() 

    try {
      const res = await axiosInstance.post('/user', { fullName, email, password })
      toast.success(res.data.message)
      navigate('/login')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form onSubmit={handleRegister} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
        
        <input 
          type="text" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          placeholder="Full Name" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        
        <button 
          type="submit" 
          className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
