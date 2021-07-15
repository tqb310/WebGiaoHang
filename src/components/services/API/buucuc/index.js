import axios from "axios";
const BASE_URL = 'http://localhost:9999';

export const getBuucuc = async (id) => {
    try {
        const data = await axios.get(`${BASE_URL}/warehouse/province`, {tinh: id});
        return data.data
    } catch (error) {
        
    }
}