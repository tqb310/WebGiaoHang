import axios from "axios";
const BASE_URL = 'http://localhost:9999';

export const getDetail = async (id) => {
    try {
        const data = await axios.get(`${BASE_URL}/order/${id}`);
        return data.data
    } catch (error) {
        
    }
}

