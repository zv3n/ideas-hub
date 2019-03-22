import axios from 'axios'
//const ip = process.env.REACT_APP_BACKEND_IP

const ideasPath = `https://localhost:4000/`

export function getAllIdeas() {
  return axios.get(ideasPath)
}

export function postNewIdea(idea) {
  return axios.post(ideasPath, idea)
}
