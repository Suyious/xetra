import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.43.98:4000"
})

export default instance;