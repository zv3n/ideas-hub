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

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME

const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export function imageUpload(event) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

  const formData = new FormData()
  formData.append('file', event.target.files[0])
  formData.append('upload_preset', PRESET)

  return axios.post(url, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
}
