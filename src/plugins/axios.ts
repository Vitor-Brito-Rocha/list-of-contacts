import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api-endpoint.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// Response interceptor
api.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response?.status === 401) {
    // Handle unauthorized
  }
  return Promise.reject(error)
})

export default api