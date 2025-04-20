import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/request", 
    withCredentials: true,
  });


export const postRequest = (formData) => {
  return API.post('/postrequest', {formData});
};

export const updateStatus=(requestId)=>API.put(`updatestatus/${requestId}`)
