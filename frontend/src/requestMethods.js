import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTBlNDkyYTk4NzU4OTVkOTIwNzUyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODA4NDgzMywiZXhwIjoxNjM4MzQ0MDMzfQ.s7uT2jw-V_NaEJw8Ppzt_QQnbvwqZ6gpn2QMexLQ-tI'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer  ${TOKEN}` }
})
