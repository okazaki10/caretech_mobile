import axios from "axios";
export const URL = 'http://192.168.1.9:3000'
const axiosFetch = axios.create({
    baseURL: URL
});
export default axiosFetch
