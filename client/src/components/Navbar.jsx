import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link to="/home">📝 TodoApp</Link>
      </div>
      <div className="space-x-4">
        <Link to="/register" className="hover:text-indigo-300">Register</Link>
        <Link to="/login" className="hover:text-indigo-300">Login</Link>
        <LogoutButton />
      </div>
    </nav>
  )
}

export default Navbar
