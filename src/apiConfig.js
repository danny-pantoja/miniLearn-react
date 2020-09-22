let apiUrl
const apiUrls = {
  production: 'https://mini-learn-django.herokuapp.com/',
=======
  production: 'https://mini-learn-django.herokuapp.com/',
>>>>>>> a7928d43f454e87919365c6f5967438268b640cb
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
