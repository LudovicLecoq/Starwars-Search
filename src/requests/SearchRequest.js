import axios from 'axios'

export async function loadData() {
    try {
        const response = await axios.get(`https://swapi.dev/api/planets`);
        return response;
    }
    catch (err) {
        return false;
    }
}