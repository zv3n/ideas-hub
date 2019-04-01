import axios from 'axios'
//const ip = process.env.REACT_APP_BACKEND_IP

const ideasPath = `http://localhost:5000`

export function getAllIdeas() {
  return axios.get(`${ideasPath}/ideas/getall`)
}

export function getIdea(id) {
  return axios.get(`${ideasPath}/ideas/${id}`)
}

export function postNewIdea(idea) {
  return axios.post(`${ideasPath}/ideas/create`, idea)
}

export function updateIdea(idea) {
  return axios.patch(`${ideasPath}/ideas/${idea._id}`, idea)
}

export function deleteIdeaFromServer(id) {
  return axios.delete(`${ideasPath}/ideas/${id}`)
}
