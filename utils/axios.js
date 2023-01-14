import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: "https://xetra.onrender.com",
    withCredentials: true
})

export default instance;
