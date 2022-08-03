import axios from '../api/axios';

const login = async (credentials) => {
    const { data } = await axios.post('/login', credentials);
    return data;
}

export default {login};
