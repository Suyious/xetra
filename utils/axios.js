import axios from "axios";

const instance = axios.create({
    // baseURL: "http://192.168.43.98:4000",
    baseURL: "https://xetra.herokuapp.com",
    withCredentials: true
})

export default instance;