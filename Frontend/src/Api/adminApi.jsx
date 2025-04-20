import axios from "axios";

const API = axios.create({
    baseURL: "https://my-portfolio-bapt.onrender.com/api/admin", 
    withCredentials: true,
  });


export const login = (email,password)=>API.post('/login',{email,password})
export const logout=()=>API.post('/logout')