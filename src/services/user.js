import { axiosPrivate } from "../api/axios";

const user = async () => {
    const { data } = await axiosPrivate.get('/user');
    return data;
}

const userLogout = async () => {
    const { data } = await axiosPrivate.post('/logout');
    return data;
}

export default {user, userLogout};