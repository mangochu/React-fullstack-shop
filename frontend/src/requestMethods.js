import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTBlNDkyYTk4NzU4OTVkOTIwNzUyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODEyMzM2OSwiZXhwIjoxNjM4MzgyNTY5fQ.sXgZehLdEysHR81g80wKf_cObV1ldOZn548w04-0Cs8'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` }
})
