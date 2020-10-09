import apiUrl from '../apiConfig'
import axios from 'axios'

export const instructorContentCreate = (user, content) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/instructor-content/',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      content: {
        title: content.title,
        description: content.description
      }
    }
  })
}
//
// // export const signIn = credentials => {
// //   return axios({
// //     url: apiUrl + '/sign-in/',
// //     method: 'POST',
// //     data: {
// //       credentials: {
// //         email: credentials.email,
// //         password: credentials.password
// //       }
// //     }
// //   })
// // }
// //
// // export const signOut = user => {
// //   return axios({
// //     url: apiUrl + '/sign-out/',
// //     method: 'DELETE',
// //     headers: {
// //       'Authorization': `Token token=${user.token}`
// //     }
// //   })
// // }
// //
// // export const changePassword = (passwords, user) => {
// //   return axios({
// //     url: apiUrl + '/change-pw/',
// //     method: 'PATCH',
// //     headers: {
// //       'Authorization': `Token token=${user.token}`
// //     },
// //     data: {
// //       passwords: {
// //         old: passwords.oldPassword,
// //         new: passwords.newPassword
// //       }
// //     }
// //   })
// // }
