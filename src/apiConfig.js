let apiUrl
const apiUrls = {
<<<<<<< HEAD
  production: 'https://mini-learn-django.herokuapp.com',
=======
  production: 'https://mini-learn-django.herokuapp.com/',
>>>>>>> commit to deploy
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
