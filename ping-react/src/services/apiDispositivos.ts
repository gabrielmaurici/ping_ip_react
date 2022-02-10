import axios from "axios";
import { checkPrimeSync } from "crypto";

export const apiDispositivos = axios.create({
    baseURL: 'http://localhost:34752/api/PingIp'
});

apiDispositivos.interceptors.response.use((response) => {

    return response;
},(error) => {

    return error.response;
});