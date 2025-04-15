// src/pages/Login.jsx
import React, { useState } from 'react'
import axiosInstance from '../axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosInstance.post('/user/login', { email, password })
      toast.success(res.data.message)
      navigate('/home')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded p-6 w-96">
        <h2 className="text-xl font-bold text-black mb-4 text-center">Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full mb-3 p-2 border rounded" required />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}

export default Login
