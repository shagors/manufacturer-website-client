import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://pacific-ridge-38840.herokuapp.com/',
});

export default fetcher;