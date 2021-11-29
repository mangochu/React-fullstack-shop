import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTBlNDkyYTk4NzU4OTVkOTIwNzUyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODE5ODE5MywiZXhwIjoxNjM4NDU3MzkzfQ.AVjyc3MALbZHkpy-lZT1X4tyQKj7NNI4WBAzqAFW_hQ'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` }
})
