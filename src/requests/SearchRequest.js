import axios from 'axios'

export async function loadData(searchType, searchText, page) {
    try {
        const response = await axios.get(`https://swapi.dev/api/${searchType}/?search=${searchText}&page=${page}`);
        return response;
    }
    catch (err) {
        return false;
    }
}