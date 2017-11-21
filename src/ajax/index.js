import axios from 'axios'

// Create an instance using the config defaults provided by the library
const instance = axios.create({
  timeout: 1000 * 8,
  validateStatus(status) {
    return status < 300 || status === 304
  }
})

// Add a request interceptor
instance.interceptors.request.use(function(config) {
  // Do something before request is sent
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use((res) => {
  // Do something with response data
  // console.log(res)
}, (error) => {
  // Do something with response error
  // return Promise.reject(err)
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.warn(error.response)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.warn('Network error', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.warn('Error', error.message)
  }
  // console.log(error.config)
})

export default instance
