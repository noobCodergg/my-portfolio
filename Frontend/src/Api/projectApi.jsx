import axios from "axios";

const API = axios.create({
    baseURL: "https://my-portfolio-bapt.onrender.com/api/project", 
    withCredentials: true,
  });

export const postProject=(formData)=>API.post('/postproject',{formData})
export const getProjects=()=>API.get('/getprojects')
export const getProjectById = (projectId) => API.get(`/getprojectbyid/${projectId}`);


