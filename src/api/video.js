import apiUrl from '../apiConfig'
import axios from 'axios'

export const videoCreate = (user, video) => {
  return axios({
    url: apiUrl + '/videos/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      video: {
        title: video.title,
        description: video.description
      }
    }
  })
}

export const videos = video => {
  return axios({
    url: apiUrl + '/videos/',
    method: 'POST',
    data: {
      video: {
        title: video.title,
        description: video.description
      }
    }
  })
}

export const video = (user, video) => {
  return axios({
    url: apiUrl + '/videos/',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      video: {
        title: video.title,
        description: video.description
      }
    }
  })
}

export const videoEdit = (user, video) => {
  return axios({
    url: apiUrl + '/videos/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      video: {
        title: video.title,
        description: video.description
      }
    }
  })
}
export const videoDestroy = (user, video) => {
  return axios({
    url: apiUrl + '/videos/',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      video: {
        title: video.title,
        description: video.description
      }
    }
  })
}
