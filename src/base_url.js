import axios from "axios";
//change the url based on your local ip
export const URL = 'http://192.168.1.9:5000'
const axiosFetch = axios.create({
    baseURL: URL
});
export const formatPrice = (price) => {
    return '$ ' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default axiosFetch
