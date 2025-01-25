import axios from "axios"

export const BASE_URL = "http://localhost:8000"
export const BASE_URL_API = `${BASE_URL}/api`;

export default function Api(){
    const token = localStorage.getItem("access_token");
    const api = axios.create({
       baseURL : BASE_URL_API,
       headers:{
        'Accept': 'application/json',
        'Authorization': 'Bearer '+token
    }
    });
    return api;
}