import axios from 'axios';
import { API_URL_VERSION } from '../constants'

const getPage = (pageId) => {
  return axios.get(`${API_URL_VERSION}/pages/${pageId}`)
    .then(response => response.data)
    .catch(error => error)
}

const getPost = (postId) => {
  return axios.get(`${API_URL_VERSION}/posts/${postId}`)
    .then(response => response.data)
    .catch(error => error)
}

export {
  getPage,
  getPost
}