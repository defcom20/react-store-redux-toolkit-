import { useDispatch } from 'react-redux';
import serviceUser from '../services/user';
import { resetUser, setLoader, setUser } from '../store/slices/auth/authSlice';
const validateToken = () => {
    const refresh = async () => {
        const dispatch = useDispatch()
        dispatch(setLoader(true))
        try {
            const res = await serviceUser.user()
            dispatch(setUser(res))
            dispatch(setLoader(false))
        } catch (error) {
            window.localStorage.removeItem('user')
            window.localStorage.removeItem('token')
            dispatch( resetUser() )
            dispatch(setLoader(false))
        }
    }
    return refresh;
}
export default validateToken;