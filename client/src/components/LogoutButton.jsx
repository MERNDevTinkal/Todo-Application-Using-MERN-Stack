import axiosInstance from '../axiosInstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/user/logout')
      toast.success("Logged out successfully")
      navigate('/login')
    } catch (error) {
      toast.error("Logout failed")
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
    >
      Logout
    </button>
  )
}

export default LogoutButton
