import axios from "axios";
const BASE_URL = 'http://localhost:9999';

export const getBuucuc = async (id) => {
    try {
        console.log(id)
        const data = await axios.get(`${BASE_URL}/warehouse/province`, {params: {tinh: id}});
        
        return data.data
    } catch (error) {
        
    }
}