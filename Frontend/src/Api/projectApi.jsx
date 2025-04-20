import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/project", 
    withCredentials: true,
  });

export const postProject=(formData)=>API.post('/postproject',{formData})
export const getProjects=()=>API.get('/getprojects')
export const getProjectById = (projectId) => API.get(`/getprojectbyid/${projectId}`);


