import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://manufacturer-8az5.onrender.com/',
});

export default fetcher;