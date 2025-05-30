import axios from "axios";

const API = axios.create({
    baseURL: "https://my-portfolio-bapt.onrender.com/api/user", 
    withCredentials: true,
  });

  export const postUser=(phone,email,result)=>API.post('/postuser',phone,email,result)
  export const checkUser=(phone)=>API.get(`/checkuser/${phone}`)
  export const getJoinedUserData=()=>API.get('/getjoineduserdata')
  export const getUsers=()=>API.get('/getusers')

