import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    // baseURL: "https://xetra.herokuapp.com",
    withCredentials: true
})

export default instance;
