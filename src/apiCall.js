import axios from 'axios'
const apiCall = async (info) => {
    try {
        const response = await axios.post('https://us-central1-enye-fireside.cloudfunctions.net/api', info);
        const data = await response.json();
        return data
    } catch (error) {
        
    }
}

export default apiCall