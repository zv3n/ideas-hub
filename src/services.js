import axios from 'axios'
//const ip = process.env.REACT_APP_BACKEND_IP

const ideasPath = `http://localhost:5000`

export function getAllIdeas() {
  return axios.get(`${ideasPath}/ideas/getall`)
}

export function postNewIdea(idea) {
  console.log('huhu')
  return axios.post(`${ideasPath}/ideas/create`, idea)
}