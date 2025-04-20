import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/prize", 
    withCredentials: true,
  });

  export const postPrize=(name)=>API.post('/postprize',{name})
  export const getPrize=()=>API.get('/getprize')
  export const updateStatus=(id,status)=>API.put(`/updatestatus/${id}`,{status})

