import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
