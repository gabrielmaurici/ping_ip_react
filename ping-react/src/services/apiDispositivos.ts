import axios from "axios";

export const apiDispositivos = axios.create({
    baseURL: 'http://localhost:34752/api/PingIp'
});
