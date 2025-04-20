import axios from "axios";

const API = axios.create({
    baseURL: "https://my-portfolio4-zl9q.onrender.com/api/request", 
    withCredentials: true,
  });


export const postRequest = (formData) => {
  return API.post('/postrequest', {formData});
};

export const updateStatus=(requestId)=>API.put(`updatestatus/${requestId}`)
