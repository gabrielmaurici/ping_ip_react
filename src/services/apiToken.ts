import axios from "axios";

export const apiToken = axios.create({
    baseURL: 'http://localhost:33878/api/Auntenticacao'
});

apiToken.interceptors.response.use((response) => {

    return response;
},(error) => {

    return error.response;
});