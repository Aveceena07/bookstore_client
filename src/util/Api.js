import axios from 'axios'

export const instance = axios.create({
    baseURL: "http://localhost:8080/api/",
    // headers: {
         headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("token")}`
          },    
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem("token")}`
    // },
});