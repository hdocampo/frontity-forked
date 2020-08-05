import axios from 'axios';
import { API_URL } from '../constants'

const getPage = (pageId) => {
  return axios.get(`${API_URL}/pages/${pageId}`)
    .then(response => response.data)
    .catch(error => error)
}

const getPost = (postId) => {
  return axios.get(`${API_URL}/posts/${postId}`)
    .then(response => response.data)
    .catch(error => error)
}

export {
  getPage,
  getPost
}