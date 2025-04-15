import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true, //  Send cookies in requests
})

export default axiosInstance
