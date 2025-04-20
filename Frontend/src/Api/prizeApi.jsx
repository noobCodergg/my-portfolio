import axios from "axios";

const API = axios.create({
    baseURL: "https://my-portfolio-bapt.onrender.com/api/prize", 
    withCredentials: true,
  });

  export const postPrize=(name)=>API.post('/postprize',{name})
  export const getPrize=()=>API.get('/getprize')
  export const updateStatus=(id,status)=>API.put(`/updatestatus/${id}`,{status})

